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

	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"github.com/labstack/echo-contrib/session"
	"github.com/labstack/echo/v4"
	"github.com/temporalio/web-go/server/generated/api/workflowservice/v1"
	"github.com/temporalio/web-go/server/temporal"
)

// SetAPIRoutes sets api routes
func SetAPIRoutes(e *echo.Echo, temporalClient *temporal.Client) error {

	api := e.Group("/api")
	api.GET("/me", getCurrentUser)

	tMux := runtime.NewServeMux()
	if err := workflowservice.RegisterWorkflowServiceHandler(context.TODO(), tMux, temporalClient.Connection); err != nil {
		return err
	}

	api.GET("/*", echo.WrapHandler(tMux))

	return nil
}

func getCurrentUser(c echo.Context) error {
	sess, _ := session.Get("auth", c)
	email := sess.Values["email"]

	if email == nil {
		return c.JSON(http.StatusOK, nil)
	}

	user := struct {
		Email string
	}{email.(string)}

	return c.JSON(http.StatusOK, user)
}
