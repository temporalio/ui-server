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

	"github.com/gorilla/sessions"
	"github.com/labstack/echo-contrib/session"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/temporalio/web-go/server/routes"
	"github.com/temporalio/web-go/server/temporal"
)

//go:embed generated/webui/index.html
var webuiHTML []byte

//go:embed generated/webui
var webuiAssets embed.FS

type (
	// Server ui server.
	Server struct {
		httpServer     *echo.Echo
		temporalClient *temporal.Client
	}
)

// NewServer returns a new instance of server that serves one or many services.
func NewServer() *Server {
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(session.Middleware(sessions.NewCookieStore([]byte("secret"))))

	tClient, err := temporal.NewClient("127.0.0.1:7233", e.Logger)
	if err != nil {
		e.Logger.Fatal(err)
	}
	routes.SetAPIRoutes(e, tClient)
	routes.SetAuthRoutes(e)
	routes.SetWebUIRoutes(e, webuiHTML, webuiAssets)

	s := &Server{
		httpServer:     e,
		temporalClient: tClient,
	}
	return s
}

// Start web ui server.
func (s *Server) Start() error {
	fmt.Println("Starting web server...")
	s.httpServer.Logger.Fatal(s.httpServer.Start(":8080"))
	return nil
}

// Stop web ui server.
func (s *Server) Stop() {
	fmt.Println("Stopping web server...")
	if err := s.httpServer.Close(); err != nil {
		s.httpServer.Logger.Warn(err)
	}
	s.temporalClient.Close()
}
