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

	"github.com/gorilla/securecookie"
	"github.com/gorilla/sessions"
	"github.com/labstack/echo-contrib/session"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"google.golang.org/grpc"

	"github.com/temporalio/ui-server/server/routes"
	"github.com/temporalio/ui-server/server/rpc"
	"github.com/temporalio/ui-server/server/server_options"
)

//go:embed generated/ui/index.html
var uiHTML []byte

// TODO resolving one of these two issues may allow to clean the embed string
// https://github.com/golang/go/issues/43854
// https://github.com/sveltejs/kit/pull/1370#issuecomment-853306453
//go:embed generated/ui/* generated/ui/_app/assets/pages/* generated/ui/_app/chunks/* generated/ui/_app/pages/* generated/ui/_app/assets/pages/namespaces/\[namespace\]/queues/\[queue\]/*  generated/ui/_app/assets/pages/namespaces/\[namespace\]/workflows/* generated/ui/_app/assets/pages/namespaces/\[namespace\]/workflows/\[workflow\]/\[run\]/* generated/ui/_app/pages/namespaces/\[namespace\]/queues/\[queue\]/* generated/ui/_app/pages/namespaces/\[namespace\]/report/* generated/ui/_app/pages/namespaces/\[namespace\]/workflows/\[workflow\]/\[run\]/* generated/ui/_app/pages/namespaces/\[namespace\]/workflows/* generated/ui/_app/pages/namespaces/\[namespace\]/*
var uiAssets embed.FS

//go:embed generated/openapi/index.html
var swaggeruiHTML []byte

//go:embed generated/openapi
var swaggeruiAssets embed.FS

type (
	// Server ui server.
	Server struct {
		httpServer   *echo.Echo
		temporalConn *grpc.ClientConn
		options      *server_options.ServerOptions
	}
)

// NewServer returns a new instance of server that serves one or many services.
func NewServer(opts ...server_options.ServerOption) *Server {
	serverOpts := server_options.NewServerOptions(opts)

	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.Secure())
	e.Use(middleware.CSRF())
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins:     serverOpts.Config.CORS.AllowOrigins,
		AllowHeaders:     []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
		AllowCredentials: true,
	}))
	e.Use(session.Middleware(sessions.NewCookieStore(
		securecookie.GenerateRandomKey(32),
		securecookie.GenerateRandomKey(32),
	)))

	conn := rpc.CreateFrontendGRPCConnection(serverOpts.Config.TemporalGRPCAddress)
	routes.SetAPIRoutes(e, serverOpts.Config, conn)

	routes.SetAuthRoutes(e, &serverOpts.Config.Auth)
	if serverOpts.Config.EnableOpenAPI {
		routes.SetSwaggerUIRoutes(e, swaggeruiHTML, swaggeruiAssets)
	}
	if serverOpts.Config.EnableUI {
		routes.SetUIRoutes(e, uiHTML, uiAssets)
	}

	s := &Server{
		httpServer:   e,
		temporalConn: conn,
		options:      serverOpts,
	}
	return s
}

// Start UI server.
func (s *Server) Start() error {
	fmt.Println("Starting UI server...")
	address := fmt.Sprintf("%s:%d", s.options.Config.Host, s.options.Config.Port)
	s.httpServer.Logger.Fatal(s.httpServer.Start(address))
	return nil
}

// Stop UI server.
func (s *Server) Stop() {
	fmt.Println("Stopping UI server...")
	if err := s.httpServer.Close(); err != nil {
		s.httpServer.Logger.Warn(err)
	}
	s.temporalConn.Close()
}
