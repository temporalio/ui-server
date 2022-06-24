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

package auth

import (
	"context"
	"net/http"
	"time"

	"github.com/gorilla/sessions"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"github.com/labstack/echo-contrib/session"
	"github.com/labstack/echo/v4"
	"github.com/temporalio/ui-server/v2/server/config"
	"google.golang.org/grpc/metadata"
)

const (
	AuthCookie             = "auth"
	AccessTokenKey         = "access-token"
	AuthorizationExtrasKey = "authorization-extras"
	EmailKey               = "email"
	NameKey                = "name"
	PictureKey             = "picture"
)

func GetCurrentUser(c echo.Context) error {
	sess, _ := session.Get(AuthCookie, c)
	email := sess.Values[EmailKey]
	name := sess.Values[NameKey]
	picture := sess.Values[PictureKey]

	if email == nil {
		return c.JSON(http.StatusOK, nil)
	}

	user := struct {
		Email   string
		Name    string
		Picture string
	}{email.(string), name.(string), picture.(string)}

	return c.JSON(http.StatusOK, user)
}

func SetUser(c echo.Context, user *User) error {
	sess, err := session.Get(AuthCookie, c)
	if err != nil {
		return err
	}

	sess.Options = &sessions.Options{
		Path:     "/",
		MaxAge:   7 * 24 * int(time.Hour.Seconds()),
		HttpOnly: true,
		SameSite: http.SameSiteStrictMode,
		Secure:   true,
	}
	sess.Values[AccessTokenKey] = &user.OAuth2Token.AccessToken
	sess.Values[EmailKey] = &user.IDToken.Email
	sess.Values[PictureKey] = &user.IDToken.Picture
	sess.Values[NameKey] = &user.IDToken.Name

	err = sess.Save(c.Request(), c.Response())
	if err != nil {
		return err
	}

	return nil
}

func ValidateAuth(c echo.Context, cfgProvider *config.ConfigProviderWithRefresh) error {
	cfg, err := cfgProvider.GetConfig()
	if err != nil {
		return err
	}

	isEnabled := cfg.Auth.Enabled
	if !isEnabled {
		return nil
	}

	token := getAccessToken(c)
	if token == "" {
		return echo.NewHTTPError(http.StatusUnauthorized, "unauthorized")
	}

	return nil
}

func WithAuth(c echo.Context) runtime.ServeMuxOption {
	return runtime.WithMetadata(
		func(ctx context.Context, req *http.Request) metadata.MD {
			md := metadata.MD{}

			token := getAccessToken(c)
			if token != "" {
				md.Append(echo.HeaderAuthorization, "Bearer "+token)
			}

			extras := getAuthorizationExtras(c)
			if extras != "" {
				md.Append(AuthorizationExtrasKey, extras)
			}

			return md
		},
	)
}

func getAccessToken(c echo.Context) string {
	rToken := c.Request().Header.Get(echo.HeaderAuthorization)
	if rToken != "" {
		return rToken
	}

	sess, _ := session.Get(AuthCookie, c)
	if sess == nil {
		return ""
	}

	cToken := sess.Values[AccessTokenKey]
	if cToken == nil {
		return ""
	}

	return cToken.(string)
}

func getAuthorizationExtras(c echo.Context) string {
	sess, _ := session.Get(AuthCookie, c)
	if sess == nil {
		return ""
	}

	extras := sess.Values[AuthorizationExtrasKey]
	if extras == nil {
		return ""
	}

	return extras.(string)
}
