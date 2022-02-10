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
	"crypto/x509"
	"fmt"
	"log"
	"strings"
	"time"

	"github.com/temporalio/ui-server/server/config"
)

type (
	// TLSConfigProvider serves as a common interface to read server and client configuration for TLS.
	TLSConfigProvider interface {
		GetTLSConfig() (*tls.Config, error)
	}

	// CertProvider is a common interface to load raw TLS/X509 primitives.
	CertProvider interface {
		FetchCertificate() (*tls.Certificate, error)
		FetchCA() (*x509.CertPool, error)
		GetExpiringCerts(timeWindow time.Duration) (expiring CertExpirationMap, expired CertExpirationMap, err error)
	}

	// PerHostCertProviderMap returns a CertProvider for a given host name.
	PerHostCertProviderMap interface {
		GetCertProvider(hostName string) (provider CertProvider, clientAuthRequired bool, err error)
		GetExpiringCerts(timeWindow time.Duration) (expiring CertExpirationMap, expired CertExpirationMap, err error)
		NumberOfHosts() int
	}

	CertThumbprint [16]byte

	CertExpirationData struct {
		Thumbprint CertThumbprint
		IsCA       bool
		DNSNames   []string
		Expiration time.Time
	}

	CertExpirationMap map[CertThumbprint]CertExpirationData

	CertExpirationChecker interface {
		GetExpiringCerts(timeWindow time.Duration) (expiring CertExpirationMap, expired CertExpirationMap, err error)
	}

	tlsConfigConstructor func() (*tls.Config, error)
)

// NewTLSConfigProviderFromConfig creates a new TLS Config provider from RootTLS config.
// A custom cert provider factory can be optionally injected via certProviderFactory argument.
// Otherwise, it defaults to using localStoreCertProvider
func NewTLSConfigProviderFromConfig(
	encryptionSettings config.TLS,
	logger log.Logger,
	certProviderFactory CertProviderFactory,
) (TLSConfigProvider, error) {

	if err := validateTLS(&encryptionSettings); err != nil {
		return nil, err
	}
	if certProviderFactory == nil {
		certProviderFactory = NewLocalStoreCertProvider
	}
	return NewLocalStoreTlsProvider(&encryptionSettings, certProviderFactory)
}

func validateTLS(cfg *config.TLS) error {
	if cfg.CertFile != "" && cfg.CertData != "" {
		return fmt.Errorf("cannot specify TLS cert file and cert data at the same time")
	}
	if cfg.KeyFile != "" && cfg.KeyData != "" {
		return fmt.Errorf("cannot specify TLS key file and key data at the same time")
	}
	if cfg.CaFile != "" && cfg.CaData != "" {
		return fmt.Errorf("cannot specify TLS CA file and CA data at the same time")
	}

	if strings.TrimSpace(cfg.CaFile) == "" && strings.TrimSpace(cfg.CaData) == "" {
		return fmt.Errorf("CA cannot be empty string")
	}
	return nil
}
