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
	"net/http"

	"github.com/labstack/echo/v4"
	"github.com/temporalio/web-go/server/temporal"
	"go.temporal.io/api/workflowservice/v1"
)

// SetAPIRoutes sets api routes
func SetAPIRoutes(e *echo.Echo) {
	api := e.Group("/api")
	api.GET("/namespaces", listNamespaces)
	api.GET("/namespaces/:namespace/workflows", listWorkflows)
}

func listNamespaces(c echo.Context) error {
	tClient, _ := temporal.NewClient("127.0.0.1:7233")

	req := workflowservice.ListNamespacesRequest{NextPageToken: nil, PageSize: 10}
	res, _ := tClient.ListNamespaces(&req)
	return c.JSON(http.StatusOK, res)
}

func listWorkflows(c echo.Context) error {
	namespace := c.Param("namespace")
	tClient, _ := temporal.NewClient("127.0.0.1:7233")

	// reqOpen := workflowservice.ListOpenWorkflowExecutionsRequest{NextPageToken: nil, MaximumPageSize: 100, Namespace: "default"}
	// resOpen, _ := tClient.ListOpenWorkflowExecutions(&reqOpen)

	reqClosed := workflowservice.ListClosedWorkflowExecutionsRequest{NextPageToken: nil, MaximumPageSize: 100, Namespace: namespace}
	resClosed, _ := tClient.ListClosedWorkflowExecutions(&reqClosed)

	return c.JSON(http.StatusOK, resClosed)
}
