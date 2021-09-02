// The MIT License
//
// Copyright (c) 2020 Temporal Technologies Inc.  All rights reserved.
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

package config

import (
	"errors"
)

type (
	// Config contains the configuration for the UI server
	Config struct {
		TemporalGRPCAddress string   `yaml:"temporalGrpcAddress"`
		Port                int      `yaml:"port"`
		UIRootPath          string   `yaml:"uiRootPath"`
		SessionSecrets      []string `yaml:"sessionSecrets"`
		Auth                Auth     `yaml:"auth"`
	}

	Auth struct {
		Enabled   bool           `yaml:"enabled"`
		Providers []AuthProvider `yaml:"providers"`
	}

	AuthProvider struct {
		Label        string   `yaml:"label"`
		Type         string   `yaml:"type"`
		ProviderUrl  string   `yaml:"providerUrl"`
		ClientID     string   `yaml:"clientId"`
		ClientSecret string   `yaml:"clientSecret"`
		Scopes       []string `yaml:"scopes"`
		Audience     string   `yaml:"audience"`
		CallbackURL  string   `yaml:"callbackUrl"`
		PassIDToken  bool     `yaml:"passIdToken"`
	}
)

// Validate validates this config
func (c *Config) Validate() error {
	if c.TemporalGRPCAddress == "" {
		return errors.New("temporal frontend gRPC address is not set")
	}

	if err := c.Auth.Validate(); err != nil {
		return err
	}

	return nil
}
