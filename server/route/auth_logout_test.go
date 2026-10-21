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

package route

import (
	"encoding/base64"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"net/url"
	"testing"

	"github.com/labstack/echo/v4"
	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"

	"github.com/temporalio/ui-server/v2/server/auth"
)

// userCookie builds the non-HttpOnly user0 cookie SetUser writes, carrying the raw
// id_token the logout handler reads back as id_token_hint. The tokens used here are
// short enough to fit a single chunk.
func userCookie(t *testing.T, idToken string) *http.Cookie {
	t.Helper()
	b, err := json.Marshal(auth.UserResponse{AccessToken: "access-token", IDToken: idToken})
	require.NoError(t, err)
	return &http.Cookie{Name: "user0", Value: base64.StdEncoding.EncodeToString(b)}
}

// doLogout runs the logout handler with the given config and returns the recorder.
func doLogout(t *testing.T, es endSessionConfig, cookies ...*http.Cookie) *httptest.ResponseRecorder {
	t.Helper()
	req := httptest.NewRequest(http.MethodGet, "/auth/logout", nil)
	for _, cookie := range cookies {
		req.AddCookie(cookie)
	}
	rec := httptest.NewRecorder()
	c := echo.New().NewContext(req, rec)
	require.NoError(t, logout(false, es)(c))
	return rec
}

// clearedCookies returns the names of cookies the response instructs the browser to delete.
func clearedCookies(rec *httptest.ResponseRecorder) map[string]bool {
	cleared := map[string]bool{}
	for _, cookie := range rec.Result().Cookies() {
		if cookie.MaxAge < 0 {
			cleared[cookie.Name] = true
		}
	}
	return cleared
}

func TestLogoutLocalOnlyRedirectsToRoot(t *testing.T) {
	a := assert.New(t)

	// endSessionEnabled defaults to false, so logout stays local even when the
	// provider advertised an end_session_endpoint.
	rec := doLogout(t, endSessionConfig{enabled: false, endpoint: "https://idp.example.com/logout"},
		userCookie(t, "the-id-token"))

	a.Equal(http.StatusSeeOther, rec.Code)
	a.Equal("/", rec.Header().Get("Location"))

	cleared := clearedCookies(rec)
	a.True(cleared["refresh"], "refresh cookie must be cleared")
	a.True(cleared["session_start"], "session_start cookie must be cleared")
	a.True(cleared["user0"], "user cookies must be cleared")
}

func TestLogoutEnabledButNoEndpointFallsBackToRoot(t *testing.T) {
	a := assert.New(t)

	// A provider that does not advertise an end_session_endpoint leaves the feature
	// effectively disabled.
	rec := doLogout(t, endSessionConfig{enabled: true, endpoint: ""},
		userCookie(t, "the-id-token"))

	a.Equal(http.StatusSeeOther, rec.Code)
	a.Equal("/", rec.Header().Get("Location"))
}

func TestLogoutRPInitiatedRedirectsToEndSessionEndpoint(t *testing.T) {
	a := assert.New(t)

	rec := doLogout(t, endSessionConfig{
		enabled:               true,
		endpoint:              "https://idp.example.com/logout",
		postLogoutRedirectURI: "https://temporal.example.com",
	}, userCookie(t, "the-id-token"))

	a.Equal(http.StatusSeeOther, rec.Code)

	loc, err := url.Parse(rec.Header().Get("Location"))
	require.NoError(t, err)
	a.Equal("https://idp.example.com/logout", loc.Scheme+"://"+loc.Host+loc.Path)
	a.Equal("the-id-token", loc.Query().Get("id_token_hint"))
	a.Equal("https://temporal.example.com", loc.Query().Get("post_logout_redirect_uri"))

	// Cookies are still cleared on the RP-initiated path.
	cleared := clearedCookies(rec)
	a.True(cleared["refresh"])
	a.True(cleared["user0"])
}

func TestLogoutRPInitiatedWithoutIDTokenOmitsHint(t *testing.T) {
	a := assert.New(t)

	// No user cookie present: the handler cannot supply id_token_hint but still
	// performs RP-initiated logout.
	rec := doLogout(t, endSessionConfig{
		enabled:               true,
		endpoint:              "https://idp.example.com/logout",
		postLogoutRedirectURI: "https://temporal.example.com",
	})

	a.Equal(http.StatusSeeOther, rec.Code)
	loc, err := url.Parse(rec.Header().Get("Location"))
	require.NoError(t, err)
	a.Empty(loc.Query().Get("id_token_hint"))
	a.Equal("https://temporal.example.com", loc.Query().Get("post_logout_redirect_uri"))
}

func TestBuildEndSessionURL(t *testing.T) {
	tests := map[string]struct {
		endpoint              string
		idTokenHint           string
		postLogoutRedirectURI string
		wantErr               bool
		assertURL             func(t *testing.T, u *url.URL)
	}{
		"includes both params": {
			endpoint:              "https://idp.example.com/logout",
			idTokenHint:           "id-token",
			postLogoutRedirectURI: "https://app.example.com",
			assertURL: func(t *testing.T, u *url.URL) {
				assert.Equal(t, "id-token", u.Query().Get("id_token_hint"))
				assert.Equal(t, "https://app.example.com", u.Query().Get("post_logout_redirect_uri"))
			},
		},
		"omits empty id_token_hint": {
			endpoint:              "https://idp.example.com/logout",
			postLogoutRedirectURI: "https://app.example.com",
			assertURL: func(t *testing.T, u *url.URL) {
				_, ok := u.Query()["id_token_hint"]
				assert.False(t, ok, "id_token_hint must be omitted when empty")
			},
		},
		"preserves existing query params": {
			endpoint:    "https://idp.example.com/logout?foo=bar",
			idTokenHint: "id-token",
			assertURL: func(t *testing.T, u *url.URL) {
				assert.Equal(t, "bar", u.Query().Get("foo"))
				assert.Equal(t, "id-token", u.Query().Get("id_token_hint"))
			},
		},
		"rejects relative endpoint": {
			endpoint: "/logout",
			wantErr:  true,
		},
		"rejects unparseable endpoint": {
			endpoint: "https://idp.example.com/logout\x7f",
			wantErr:  true,
		},
	}

	for name, tt := range tests {
		t.Run(name, func(t *testing.T) {
			got, err := buildEndSessionURL(tt.endpoint, tt.idTokenHint, tt.postLogoutRedirectURI)
			if tt.wantErr {
				assert.Error(t, err)
				return
			}
			require.NoError(t, err)
			u, err := url.Parse(got)
			require.NoError(t, err)
			tt.assertURL(t, u)
		})
	}
}

func TestOriginFromURL(t *testing.T) {
	tests := map[string]struct {
		in      string
		want    string
		wantErr bool
	}{
		"https with path and port": {in: "https://app.example.com:8080/auth/sso/callback", want: "https://app.example.com:8080"},
		"http":                     {in: "http://localhost:8080/auth/sso/callback", want: "http://localhost:8080"},
		"missing scheme":           {in: "app.example.com/callback", wantErr: true},
		"empty":                    {in: "", wantErr: true},
	}

	for name, tt := range tests {
		t.Run(name, func(t *testing.T) {
			got, err := originFromURL(tt.in)
			if tt.wantErr {
				assert.Error(t, err)
				return
			}
			require.NoError(t, err)
			assert.Equal(t, tt.want, got)
		})
	}
}
