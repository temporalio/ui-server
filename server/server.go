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

package server

import (
	"embed"
	"fmt"
	"net/http"

	"github.com/gorilla/securecookie"
	"github.com/gorilla/sessions"
	"github.com/labstack/echo-contrib/session"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"

	"github.com/temporalio/ui-server/v2/server/config"
	"github.com/temporalio/ui-server/v2/server/routes"
	"github.com/temporalio/ui-server/v2/server/server_options"
)

//go:embed generated/ui/index.html
var uiHTML []byte

//go:embed all:generated/ui
var uiAssets embed.FS

//go:embed generated/openapi/index.html
var swaggeruiHTML []byte

//go:embed all:generated/openapi
var swaggeruiAssets embed.FS

type (
	// Server ui server.
	Server struct {
		httpServer  *echo.Echo
		options     *server_options.ServerOptions
		cfgProvider *config.ConfigProviderWithRefresh
	}
)

// NewServer returns a new instance of server that serves one or many services.
func NewServer(opts ...server_options.ServerOption) *Server {
	serverOpts := server_options.NewServerOptions(opts)
	cfgProvider, err := config.NewConfigProviderWithRefresh(serverOpts.ConfigProvider)
	if err != nil {
		panic(err)
	}
	cfg, err := cfgProvider.GetConfig()
	if err != nil {
		panic(err)
	}

	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: cfg.CORS.AllowOrigins,
		AllowHeaders: []string{
			echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept,
			echo.HeaderXCSRFToken, echo.HeaderAuthorization,
		},
		AllowCredentials: true,
	}))
	e.Use(middleware.Secure())
	e.Use(middleware.CSRFWithConfig(middleware.CSRFConfig{
		CookiePath:     "/",
		CookieHTTPOnly: false,
		CookieSameSite: http.SameSiteStrictMode,
		CookieSecure:   true,
	}))
	e.Use(session.Middleware(sessions.NewCookieStore(
		securecookie.GenerateRandomKey(32),
		securecookie.GenerateRandomKey(32),
	)))

	if err != nil {
		panic(err)
	}

	routes.SetAPIRoutes(e, cfgProvider, serverOpts.APIMiddleware)
	routes.SetAuthRoutes(e, cfgProvider)

	if cfg.EnableOpenAPI {
		routes.SetSwaggerUIRoutes(e, swaggeruiHTML, swaggeruiAssets)
	}
	if cfg.EnableUI {
		routes.SetUIRoutes(e, uiHTML, uiAssets)
	}

	s := &Server{
		httpServer:  e,
		options:     serverOpts,
		cfgProvider: cfgProvider,
	}
	return s
}

// Start UI server.
func (s *Server) Start() error {
	fmt.Println("Starting UI server...")
	cfg, err := s.cfgProvider.GetConfig()
	if err != nil {
		return err
	}

	address := fmt.Sprintf("%s:%d", cfg.Host, cfg.Port)
	s.httpServer.Logger.Fatal(s.httpServer.Start(address))
	return nil
}

// Stop UI server.
func (s *Server) Stop() {
	fmt.Println("Stopping UI server...")
	if err := s.httpServer.Close(); err != nil {
		s.httpServer.Logger.Warn(err)
	}
}
