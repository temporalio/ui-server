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
	"strconv"

	"github.com/gorilla/securecookie"
	"github.com/gorilla/sessions"
	"github.com/labstack/echo-contrib/session"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"google.golang.org/grpc"

	"github.com/temporalio/web-go/server/routes"
	"github.com/temporalio/web-go/server/rpc"
	"github.com/temporalio/web-go/server/server_options"
)

// // go:embed generated/ui
// var uiAssets embed.FS

//go:embed generated/swagger-ui/index.html
var swaggeruiHTML []byte

//go:embed generated/swagger-ui
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

	e.Use(session.Middleware(sessions.NewCookieStore(
		securecookie.GenerateRandomKey(32),
		securecookie.GenerateRandomKey(32),
	)))

	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:3000", "https://localhost:3000"},
		AllowHeaders: []string{echo.HeaderOrigin, echo.HeaderContentType, echo.HeaderAccept},
	}))

	conn := rpc.CreateFrontendGRPCConnection(serverOpts.Config.TemporalGRPCAddress)
	routes.SetAPIRoutes(e, conn)
	routes.SetAuthRoutes(e, &serverOpts.Config.Auth)
	routes.SetSwaggerUIRoutes(e, swaggeruiHTML, swaggeruiAssets)
	// routes.SetUIRoutes(e, uiAssets)

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
	port := s.options.Config.Port
	s.httpServer.Logger.Fatal(s.httpServer.Start(":" + strconv.Itoa(port)))
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
