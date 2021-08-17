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
	"context"
	"net/http"

	"github.com/gogo/gateway"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"github.com/labstack/echo-contrib/session"
	"github.com/labstack/echo/v4"
	"github.com/temporalio/web-go/server/generated/api/workflowservice/v1"
	"google.golang.org/grpc"
)

// SetAPIRoutes sets api routes
func SetAPIRoutes(e *echo.Echo, temporalConn *grpc.ClientConn) error {
	api := e.Group("/api")
	api.GET("/me", getCurrentUser)

	jsonpb := &gateway.JSONPb{
		EmitDefaults: true,
		Indent:       "  ",
		OrigName:     false,
	}

	tMux := runtime.NewServeMux(
		runtime.WithMarshalerOption(runtime.MIMEWildcard, jsonpb),
		// This is necessary to get error details properly
		// marshalled in unary requests.
		runtime.WithProtoErrorHandler(runtime.DefaultHTTPProtoErrorHandler),
	)
	if err := workflowservice.RegisterWorkflowServiceHandler(context.Background(), tMux, temporalConn); err != nil {
		return err
	}

	api.GET("/*", echo.WrapHandler(tMux))

	return nil
}

func getCurrentUser(c echo.Context) error {
	sess, _ := session.Get("auth", c)
	email := sess.Values["email"]
	name := sess.Values["name"]
	picture := sess.Values["picture"]

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
