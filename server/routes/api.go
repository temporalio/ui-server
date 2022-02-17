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

	"github.com/gogo/gateway"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"github.com/labstack/echo-contrib/session"
	"github.com/labstack/echo/v4"
	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"

	"github.com/temporalio/ui-server/server/config"
	"github.com/temporalio/ui-server/server/generated/api/workflowservice/v1"
)

// SetAPIRoutes sets api routes
func SetAPIRoutes(e *echo.Echo, cfg *config.Config, temporalConn *grpc.ClientConn) error {
	api := e.Group("/api")
	api.GET("/v1/me", getCurrentUser)
	api.GET("/v1/settings", getSettings(cfg))
	api.Match([]string{"GET", "POST", "PUT", "PATCH", "DELETE"}, "/*", temporalAPIHandler(temporalConn))
	return nil
}

func temporalAPIHandler(temporalConn *grpc.ClientConn) echo.HandlerFunc {
	return func(c echo.Context) error {
		mux, err := getTemporalClientMux(c, temporalConn)
		if err != nil {
			return err
		}

		mux.ServeHTTP(c.Response(), c.Request())
		return nil
	}
}

func getTemporalClientMux(c echo.Context, temporalConn *grpc.ClientConn) (*runtime.ServeMux, error) {
	tMux := runtime.NewServeMux(
		withMarshaler(),
		withAuth(c),
		// This is necessary to get error details properly
		// marshalled in unary requests.
		runtime.WithProtoErrorHandler(runtime.DefaultHTTPProtoErrorHandler),
	)

	if err := workflowservice.RegisterWorkflowServiceHandler(context.Background(), tMux, temporalConn); err != nil {
		return nil, err
	}
	return tMux, nil
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

func getSettings(cfg *config.Config) func(echo.Context) error {
	return func(c echo.Context) error {
		settings := struct {
			Auth struct {
				Enabled bool
			}
			DefaultNamespace string
		}{
			struct{ Enabled bool }{
				cfg.Auth.Enabled,
			},
			cfg.DefaultNamespace,
		}

		return c.JSON(http.StatusOK, settings)
	}
}

func withMarshaler() runtime.ServeMuxOption {
	jsonpb := &gateway.JSONPb{
		EmitDefaults: true,
		Indent:       "  ",
		OrigName:     false,
	}

	return runtime.WithMarshalerOption(runtime.MIMEWildcard, jsonpb)
}

func withAuth(c echo.Context) runtime.ServeMuxOption {
	return runtime.WithMetadata(
		func(ctx context.Context, req *http.Request) metadata.MD {
			md := metadata.MD{}

			sess, _ := session.Get("auth", c)

			if sess == nil {
				return md
			}

			token := sess.Values["access-token"]
			if token != nil {
				md.Append("authorization", "Bearer "+token.(string))
			}

			extras := sess.Values["authorization-extras"]
			if extras != nil {
				// ex. ID Token
				md.Append("authorization-extras", extras.(string))
			}

			return md
		},
	)
}
