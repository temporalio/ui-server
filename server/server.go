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
	"fmt"
	"net/http"

	// statik build output
	_ "github.com/temporalio/web-go/statik"

	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/rakyll/statik/fs"
	"github.com/temporalio/web-go/server/routes"
	"github.com/temporalio/web-go/server/temporal"
)

type (
	// Server ui server.
	Server struct {
		App *echo.Echo
	}
)

// NewServer returns a new instance of server that serves one or many services.
func NewServer() *Server {
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	tClient, err := temporal.NewClient("127.0.0.1:7233")
	if err != nil {
		e.Logger.Fatal(err)
	}
	routes.SetAPIRoutes(e, tClient)

	statikFS, err := fs.New()
	if err != nil {
		e.Logger.Fatal(err)
	}
	h := http.FileServer(statikFS)
	e.GET("/*", echo.WrapHandler(http.StripPrefix("/", h)))

	s := &Server{
		App: e,
	}
	return s
}

// Start web ui server.
func (s *Server) Start() error {
	fmt.Println("Starting web server...")
	s.App.Logger.Fatal(s.App.Start(":8080"))
	return nil
}

// Stop web ui server.
func (s *Server) Stop() {
	fmt.Println("Stopping web server...")
}
