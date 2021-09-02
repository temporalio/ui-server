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
	"io"
	"log"
	"net/http"
	"time"

	"github.com/coreos/go-oidc/v3/oidc"
	"github.com/gorilla/sessions"
	"github.com/labstack/echo-contrib/session"
	"github.com/labstack/echo/v4"
	"github.com/temporalio/web-go/server/config"
	"golang.org/x/net/context"
	"golang.org/x/oauth2"
)

type User struct {
	OAuth2Token *oauth2.Token
	IDToken     *Claims
}

type Claims struct {
	Email         string `json:"email"`
	EmailVerified bool   `json:"email_verified"`
	Name          string `json:"name"`
	Picture       string `json:"picture"`
}

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
func SetAuthRoutes(e *echo.Echo, cfg *config.Auth) {
	ctx := context.Background()

	if !cfg.Enabled {
		return
	}

	if len(cfg.Providers) == 0 {
		log.Fatal(`auth providers configuration is empty. Configure an auth provider or disable auth`)
	}

	providerCfg := cfg.Providers[0] // only single provider is currently supported

	provider, err := oidc.NewProvider(ctx, providerCfg.ProviderUrl)
	if err != nil {
		log.Fatal(err)
	}

	config := oauth2.Config{
		ClientID:     providerCfg.ClientID,
		ClientSecret: providerCfg.ClientSecret,
		Endpoint:     provider.Endpoint(),
		RedirectURL:  providerCfg.CallbackURL,
		Scopes:       providerCfg.Scopes,
	}

	api := e.Group("/auth")
	api.GET("/sso", authenticate(&config))
	api.GET("/sso/callback", authenticateCb(ctx, &config, provider))
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

func authenticateCb(ctx context.Context, config *oauth2.Config, provider *oidc.Provider) func(echo.Context) error {
	return func(c echo.Context) error {
		user, err := exchangeCode(ctx, c.Request(), config, provider)
		if err != nil {
			return err
		}

		sess, _ := session.Get("auth", c)
		sess.Options = &sessions.Options{
			Path:     "/",
			MaxAge:   7 * 24 * int(time.Hour.Seconds()),
			HttpOnly: true,
		}
		sess.Values["access-token"] = &user.OAuth2Token.AccessToken
		sess.Values["email"] = &user.IDToken.Email
		sess.Values["picture"] = &user.IDToken.Picture
		sess.Values["name"] = &user.IDToken.Name
		sess.Save(c.Request(), c.Response())

		return c.Redirect(http.StatusSeeOther, "/")
	}
}

func exchangeCode(ctx context.Context, r *http.Request, config *oauth2.Config, provider *oidc.Provider) (*User, error) {
	state, err := r.Cookie("state")
	if err != nil {
		return nil, echo.NewHTTPError(http.StatusBadRequest, "State cookie is not set in request")
	}
	if r.URL.Query().Get("state") != state.Value {
		return nil, echo.NewHTTPError(http.StatusBadRequest, "State cookie did not match")
	}

	oauth2Token, err := config.Exchange(ctx, r.URL.Query().Get("code"))
	if err != nil {
		return nil, echo.NewHTTPError(http.StatusInternalServerError, "Unable to exchange token: "+err.Error())
	}

	rawIDToken, ok := oauth2Token.Extra("id_token").(string)
	if !ok {
		return nil, echo.NewHTTPError(http.StatusInternalServerError, "No id_token field in oauth2 token.")
	}
	oidcConfig := &oidc.Config{
		ClientID: config.ClientID,
	}
	verifier := provider.Verifier(oidcConfig)
	idToken, err := verifier.Verify(ctx, rawIDToken)
	if err != nil {
		return nil, echo.NewHTTPError(http.StatusInternalServerError, "Unable to verify ID Token: "+err.Error())
	}

	nonce, err := r.Cookie("nonce")
	if err != nil {
		return nil, echo.NewHTTPError(http.StatusBadRequest, "Nonce is not provided")
	}
	if idToken.Nonce != nonce.Value {
		return nil, echo.NewHTTPError(http.StatusBadRequest, "Nonce did not match")
	}

	var claims Claims

	if err := idToken.Claims(&claims); err != nil {
		return nil, echo.NewHTTPError(http.StatusInternalServerError, err.Error())
	}

	user := User{
		OAuth2Token: oauth2Token,
		IDToken:     &claims,
	}

	return &user, nil
}
