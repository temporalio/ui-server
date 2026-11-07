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

package auth_test

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/labstack/echo/v4"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"golang.org/x/oauth2"

	"github.com/temporalio/ui-server/v2/server/auth"
)

// TestIDTokenFromCookies round-trips an id_token through the user* cookies written by
// SetUser so the logout handler can recover it as id_token_hint. A long token exercises
// the multi-chunk split/reassembly path.
func TestIDTokenFromCookies(t *testing.T) {
	rawIDToken := "header." + strings.Repeat("payload-segment.", 600) + "signature"

	// Write the user* cookies the way the callback handler does.
	writeRec := httptest.NewRecorder()
	writeCtx := echo.New().NewContext(httptest.NewRequest(http.MethodGet, "/auth/sso/callback", nil), writeRec)
	user := auth.User{
		OAuth2Token: &oauth2.Token{AccessToken: "access-token"},
		IDToken:     &auth.IDToken{RawToken: rawIDToken, Claims: &auth.Claims{Name: "test"}},
	}
	require.NoError(t, auth.SetUser(writeCtx, &user, auth.CookieOptions{}))

	setCookies := writeRec.Result().Cookies()
	var userChunks int
	for _, c := range setCookies {
		if strings.HasPrefix(c.Name, "user") {
			userChunks++
		}
	}
	require.Greater(t, userChunks, 1, "the long id_token should span multiple user* cookies")

	// Replay those cookies on a new request, as the browser would at logout.
	readReq := httptest.NewRequest(http.MethodGet, "/auth/logout", nil)
	for _, c := range setCookies {
		readReq.AddCookie(c)
	}
	readCtx := echo.New().NewContext(readReq, httptest.NewRecorder())

	assert.Equal(t, rawIDToken, auth.IDTokenFromCookies(readCtx))
}

func TestIDTokenFromCookiesAbsent(t *testing.T) {
	ctx := echo.New().NewContext(httptest.NewRequest(http.MethodGet, "/auth/logout", nil), httptest.NewRecorder())
	assert.Empty(t, auth.IDTokenFromCookies(ctx))
}

func TestIDTokenFromCookiesInvalidEncoding(t *testing.T) {
	req := httptest.NewRequest(http.MethodGet, "/auth/logout", nil)
	req.AddCookie(&http.Cookie{Name: "user0", Value: "not-base64!!!"})
	ctx := echo.New().NewContext(req, httptest.NewRecorder())
	assert.Empty(t, auth.IDTokenFromCookies(ctx))
}
