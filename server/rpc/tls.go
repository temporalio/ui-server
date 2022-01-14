// The MIT License
//
// Copyright (c) 2022 Temporal Technologies Inc.  All rights reserved.
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
	"errors"
	"io"
	"net"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/labstack/echo/v4"
	"github.com/temporalio/ui-server/server/config"
)

const (
	localHostPort = "127.0.0.1:7233"
)

var netClient HttpGetter = &http.Client{
	Timeout: time.Second * 10,
}

type HttpGetter interface {
	Get(url string) (resp *http.Response, err error)
}

func CreateTLSConfig(address string, cfg config.TLS, logger echo.Logger) (*tls.Config, error) {
	var host string
	var cert *tls.Certificate
	var caPool *x509.CertPool

	if cfg.CaFile != "" {
		caCertPool, err := fetchCACert(cfg.CaFile)
		if err != nil {
			logger.Fatalf("Unable to load server CA certificate")
			return nil, err
		}
		caPool = caCertPool
	}
	if cfg.CertFile != "" {
		myCert, err := tls.LoadX509KeyPair(cfg.CertFile, cfg.KeyFile)
		if err != nil {
			logger.Fatalf("Unable to load client certificate")
			return nil, err
		}
		cert = &myCert
	}
	// If we are given arguments to verify either server or client, configure TLS
	if caPool != nil || cert != nil {
		if cfg.ServerName != "" {
			host = cfg.ServerName
		} else {
			hostPort := address
			if hostPort == "" {
				hostPort = localHostPort
			}
			// Ignoring error as we'll fail to dial anyway, and that will produce a meaningful error
			host, _, _ = net.SplitHostPort(hostPort)
		}
		tlsConfig := NewTLSConfigForServer(host, cfg.EnableHostVerification)
		if caPool != nil {
			tlsConfig.RootCAs = caPool
		}
		if cert != nil {
			tlsConfig.Certificates = []tls.Certificate{*cert}
		}

		return tlsConfig, nil
	}
	// If we are given a server name, set the TLS server name for DNS resolution
	if cfg.ServerName != "" {
		host = cfg.ServerName
		tlsConfig := NewTLSConfigForServer(host, cfg.EnableHostVerification)
		return tlsConfig, nil
	}

	return nil, nil
}

func fetchCACert(pathOrUrl string) (caPool *x509.CertPool, err error) {
	caPool = x509.NewCertPool()
	var caBytes []byte

	if strings.HasPrefix(pathOrUrl, "http://") {
		return nil, errors.New("HTTP is not supported for CA cert URLs. Provide HTTPS URL")
	}

	if strings.HasPrefix(pathOrUrl, "https://") {
		resp, err := netClient.Get(pathOrUrl)
		if err != nil {
			return nil, err
		}
		defer resp.Body.Close()
		caBytes, err = io.ReadAll(resp.Body)
		if err != nil {
			return nil, err
		}
	} else {
		caBytes, err = os.ReadFile(pathOrUrl)
		if err != nil {
			return nil, err
		}
	}

	if !caPool.AppendCertsFromPEM(caBytes) {
		return nil, errors.New("unknown failure constructing cert pool for ca")
	}
	return caPool, nil
}

func NewEmptyTLSConfig() *tls.Config {
	return &tls.Config{
		MinVersion: tls.VersionTLS12,
		NextProtos: []string{
			"h2",
		},
	}
}

func NewTLSConfigForServer(
	serverName string,
	enableHostVerification bool,
) *tls.Config {
	c := NewEmptyTLSConfig()
	c.ServerName = serverName
	c.InsecureSkipVerify = !enableHostVerification
	return c
}
