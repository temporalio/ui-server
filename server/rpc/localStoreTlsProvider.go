// The MIT License
//
// Copyright (c) 2022 Temporal Technologies Inc.  All rights reserved.
//
// Copyright (c) 2020 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

package rpc

import (
	"crypto/tls"
	"fmt"
	"sync"
	"time"

	"github.com/temporalio/ui-server/server/config"
)

type CertProviderFactory func(
	tlsSettings *config.TLS,
	refreshInterval time.Duration) CertProvider

type localStoreTlsProvider struct {
	sync.RWMutex

	settings     *config.TLS
	certProvider CertProvider

	cachedTLSConfig *tls.Config

	ticker *time.Ticker
	stop   chan bool
}

var _ TLSConfigProvider = (*localStoreTlsProvider)(nil)
var _ CertExpirationChecker = (*localStoreTlsProvider)(nil)

func NewLocalStoreTlsProvider(tlsConfig *config.TLS, certProviderFactory CertProviderFactory,
) (TLSConfigProvider, error) {

	providerF := certProviderFactory(tlsConfig, tlsConfig.RefreshInterval)

	provider := &localStoreTlsProvider{
		certProvider: providerF,
		RWMutex:      sync.RWMutex{},
		settings:     tlsConfig,
	}
	provider.initialize()
	return provider, nil
}

func (s *localStoreTlsProvider) initialize() {
	period := s.settings.ExpirationChecks.CheckInterval
	if period != 0 {
		s.stop = make(chan bool)
		s.ticker = time.NewTicker(period)
		s.checkCertExpiration() // perform initial check to emit metrics and logs right away
		go s.timerCallback()
	}
}

func (s *localStoreTlsProvider) Close() {
	if s.ticker != nil {
		s.ticker.Stop()
	}
	if s.stop != nil {
		s.stop <- true
		close(s.stop)
	}
}

func (s *localStoreTlsProvider) GetTLSConfig() (*tls.Config, error) {
	var useTLS bool

	return s.getOrCreateConfig(
		&s.cachedTLSConfig,
		func() (*tls.Config, error) {
			return newTLSConfig(s.certProvider, s.settings.ServerName,
				s.settings.EnableHostVerification)
		},
		useTLS,
	)
}

func (s *localStoreTlsProvider) GetExpiringCerts(timeWindow time.Duration,
) (expiring CertExpirationMap, expired CertExpirationMap, err error) {

	expiring = make(CertExpirationMap)
	expired = make(CertExpirationMap)

	checkError := checkExpiration(s.certProvider, timeWindow, expiring, expired)
	err = appendError(err, checkError)

	return expiring, expired, err
}

func checkExpiration(
	provider CertExpirationChecker,
	timeWindow time.Duration,
	expiring CertExpirationMap,
	expired CertExpirationMap,
) error {
	providerExpiring, providerExpired, err := provider.GetExpiringCerts(timeWindow)
	mergeMaps(expiring, providerExpiring)
	mergeMaps(expired, providerExpired)
	return err
}

func (s *localStoreTlsProvider) getOrCreateConfig(
	cachedConfig **tls.Config,
	configConstructor tlsConfigConstructor,
	isEnabled bool,
) (*tls.Config, error) {
	if !isEnabled {
		return nil, nil
	}

	// Check if exists under a read lock first
	s.RLock()
	if *cachedConfig != nil {
		defer s.RUnlock()
		return *cachedConfig, nil
	}
	// Not found, promote to write lock to initialize
	s.RUnlock()
	s.Lock()
	defer s.Unlock()
	// Check if someone got here first while waiting for write lock
	if *cachedConfig != nil {
		return *cachedConfig, nil
	}

	// Load configuration
	localConfig, err := configConstructor()

	if err != nil {
		return nil, err
	}

	*cachedConfig = localConfig
	return *cachedConfig, nil
}

func newTLSConfig(cProvider CertProvider, serverName string,
	enableHostVerification bool) (*tls.Config, error) {
	serverCa, err := cProvider.FetchCA()
	if err != nil {
		return nil, fmt.Errorf("unable to load client ca: %v", err)
	}

	var getCert tlsCertFetcher = func() (*tls.Certificate, error) {
		cert, err := cProvider.FetchCertificate()
		if err != nil {
			return nil, err
		}

		if cert == nil {
			return nil, fmt.Errorf("certificate is notc provided")
		}
		return cert, nil
	}

	return NewDynamicTLSClientConfig(
		getCert,
		serverCa,
		serverName,
		enableHostVerification,
	), nil
}

func (s *localStoreTlsProvider) timerCallback() {
	for {
		select {
		case <-s.stop:
			break
		case <-s.ticker.C:
		}

		s.checkCertExpiration()
	}
}

func (s *localStoreTlsProvider) checkCertExpiration() {
	defer func() {
		var retError error
		fmt.Print(retError) // TODO log.CapturePanic(s.logger, &retError)
	}()

	var errorTime time.Time
	if s.settings.ExpirationChecks.ErrorWindow != 0 {
		errorTime = time.Now().UTC().Add(s.settings.ExpirationChecks.ErrorWindow)
	} else {
		errorTime = time.Now().UTC().AddDate(10, 0, 0)
	}

	window := s.settings.ExpirationChecks.WarningWindow
	// if only ErrorWindow is set, we set WarningWindow to the same value, so that the checks do happen
	if window == 0 && s.settings.ExpirationChecks.ErrorWindow != 0 {
		window = s.settings.ExpirationChecks.ErrorWindow
	}
	if window != 0 {
		expiring, expired, err := s.GetExpiringCerts(window)
		if err != nil {
			fmt.Printf("error while checking for certificate expiration: %s", err)
			return
		}
		s.logCerts(expired, true, errorTime)
		s.logCerts(expiring, false, errorTime)
	}
}

func (s *localStoreTlsProvider) logCerts(certs CertExpirationMap, expired bool, errorTime time.Time) {
	for _, cert := range certs {
		str := createExpirationLogMessage(cert, expired)
		if expired || cert.Expiration.Before(errorTime) {
			fmt.Println(str) // TODO s.logger.Error(str)
		} else {
			fmt.Println(str) // TODO s.logger.Warn(str)
		}
	}
}

func createExpirationLogMessage(cert CertExpirationData, expired bool) string {
	var verb string
	if expired {
		verb = "has expired"
	} else {
		verb = "will expire"
	}
	return fmt.Sprintf("certificate with thumbprint=%x %s on %v, IsCA=%t, DNS=%v",
		cert.Thumbprint, verb, cert.Expiration, cert.IsCA, cert.DNSNames)
}

func mergeMaps(to CertExpirationMap, from CertExpirationMap) {
	for k, v := range from {
		to[k] = v
	}
}
