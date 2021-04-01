// The MIT License
//
// Copyright (c) 2020 Temporal Technologies Inc.  All rights reserved.
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

package routes

import (
	"crypto/rand"
	"encoding/base64"
	"encoding/json"
	"io"
	"log"
	"net/http"
	"time"

	"github.com/coreos/go-oidc/v3/oidc"
	"github.com/labstack/echo/v4"
	"golang.org/x/net/context"
	"golang.org/x/oauth2"
)

const (
	clientID     = ""
	clientSecret = ""
	providerUrl  = ""
)

func randString(nByte int) (string, error) {
	b := make([]byte, nByte)
	if _, err := io.ReadFull(rand.Reader, b); err != nil {
		return "", err
	}
	return base64.RawURLEncoding.EncodeToString(b), nil
}

func setCallbackCookie(c echo.Context, name, value string) {
	cookie := &http.Cookie{
		Name:     name,
		Value:    value,
		MaxAge:   int(time.Hour.Seconds()),
		Secure:   c.Request().TLS != nil,
		HttpOnly: true,
	}
	c.SetCookie(cookie)
}

// SetAuthRoutes sets routes used by auth
func SetAuthRoutes(e *echo.Echo) {
	ctx := context.Background()

	provider, err := oidc.NewProvider(ctx, providerUrl)
	if err != nil {
		log.Fatal(err)
	}
	oidcConfig := &oidc.Config{
		ClientID: clientID,
	}
	verifier := provider.Verifier(oidcConfig)

	config := oauth2.Config{
		ClientID:     clientID,
		ClientSecret: clientSecret,
		Endpoint:     provider.Endpoint(),
		RedirectURL:  "http://localhost:8080/auth/sso/callback",
		Scopes:       []string{oidc.ScopeOpenID, "profile", "email"},
	}

	api := e.Group("/auth")
	api.GET("/sso", authenticate(&config))
	api.GET("/sso/callback", authenticateCb(ctx, &config, verifier))
}

func authenticate(config *oauth2.Config) func(echo.Context) error {
	return func(c echo.Context) error {
		state, err := randString(16)
		if err != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, "Internal error")
		}
		nonce, err := randString(16)
		if err != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, "Internal error")
		}
		setCallbackCookie(c, "state", state)
		setCallbackCookie(c, "nonce", nonce)

		return c.Redirect(http.StatusFound, config.AuthCodeURL(state, oidc.Nonce(nonce)))
	}
}

func authenticateCb(ctx context.Context, config *oauth2.Config, verifier *oidc.IDTokenVerifier) func(echo.Context) error {
	return func(c echo.Context) error {
		r := c.Request()
		state, err := r.Cookie("state")
		if err != nil {
			return echo.NewHTTPError(http.StatusBadRequest, "State cookie is not set in request")
		}
		if r.URL.Query().Get("state") != state.Value {
			return echo.NewHTTPError(http.StatusBadRequest, "State cookie did not match")
		}

		oauth2Token, err := config.Exchange(ctx, r.URL.Query().Get("code"))
		if err != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, "Unable to exchange token: "+err.Error())
		}
		rawIDToken, ok := oauth2Token.Extra("id_token").(string)
		if !ok {
			return echo.NewHTTPError(http.StatusInternalServerError, "No id_token field in oauth2 token.")
		}
		idToken, err := verifier.Verify(ctx, rawIDToken)
		if err != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, "Failed to verify ID Token: "+err.Error())
		}

		nonce, err := r.Cookie("nonce")
		if err != nil {
			return echo.NewHTTPError(http.StatusBadRequest, "Nonce is not provided")
		}
		if idToken.Nonce != nonce.Value {
			return echo.NewHTTPError(http.StatusBadRequest, "Nonce did not match")
		}

		oauth2Token.AccessToken = "*REDACTED*"

		resp := struct {
			OAuth2Token   *oauth2.Token
			IDTokenClaims *json.RawMessage // ID Token payload is just JSON.
		}{oauth2Token, new(json.RawMessage)}

		if err := idToken.Claims(&resp.IDTokenClaims); err != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, err.Error())
		}
		data, err := json.MarshalIndent(resp, "", "    ")
		if err != nil {
			return echo.NewHTTPError(http.StatusInternalServerError, err.Error())
		}
		return c.JSON(http.StatusOK, data)
	}
}
