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
	"fmt"
	"net/http"

	"github.com/gogo/gateway"
	"github.com/grpc-ecosystem/grpc-gateway/runtime"
	"github.com/labstack/echo-contrib/session"
	"github.com/labstack/echo/v4"
	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"

	"github.com/temporalio/ui-server/server/codec"
	"github.com/temporalio/ui-server/server/config"
	"github.com/temporalio/ui-server/server/generated/api/workflowservice/v1"
	"github.com/temporalio/ui-server/server/rpc"
)

type Auth struct {
	Enabled bool
	Options []string
}

type CodecResponse struct {
	Endpoint    string
	AccessToken string
}

type SettingsResponse struct {
	Auth                        *Auth
	DefaultNamespace            string
	ShowTemporalSystemNamespace bool
	FeedbackURL                 string
	NotifyOnNewVersion          bool
	Codec                       *CodecResponse
}

// SetAPIRoutes sets api routes
func SetAPIRoutes(e *echo.Echo, cfgProvider *config.ConfigProviderWithRefresh) error {
	api := e.Group("/api")
	api.GET("/v1/me", getCurrentUser)
	api.GET("/v1/settings", getSettings(cfgProvider))
	api.POST("/v1/settings/codec/:endpoint", codec.SetCodecEndpoint)
	api.Match([]string{"GET", "POST", "PUT", "PATCH", "DELETE"}, "/*", temporalAPIHandler(cfgProvider))
	return nil
}

func temporalAPIHandler(cfgProvider *config.ConfigProviderWithRefresh) echo.HandlerFunc {
	return func(c echo.Context) error {
		err := validateAuth(c, cfgProvider)
		if err != nil {
			return err
		}

		cfg, err := cfgProvider.GetConfig()
		if err != nil {
			return c.JSON(http.StatusInternalServerError, err)
		}

		tls, err := rpc.CreateTLSConfig(cfg.TemporalGRPCAddress, &cfg.TLS)
		if err != nil {
			fmt.Printf("unable to read TLS configs: %s", err)
		}
		conn := rpc.CreateGRPCConnection(cfg.TemporalGRPCAddress, tls)
		defer conn.Close()

		mux, err := getTemporalClientMux(c, conn)
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

func getSettings(cfgProvier *config.ConfigProviderWithRefresh) func(echo.Context) error {
	return func(c echo.Context) error {
		cfg, err := cfgProvier.GetConfig()
		if err != nil {
			return c.JSON(http.StatusInternalServerError, err)
		}

		var options []string
		if len(cfg.Auth.Providers) != 0 {
			authProviderCfg := cfg.Auth.Providers[0].Options
			for k := range authProviderCfg {
				options = append(options, k)
			}
		}

		codecCfg := codec.GetCodec(c, cfg)
		codec := &CodecResponse{
			Endpoint: codecCfg.Endpoint,
		}
		if codecCfg.PassAccessToken {
			sess, _ := session.Get("auth", c)
			if sess != nil {
				token := sess.Values["access-token"]
				if token != nil {
					codec.AccessToken = token.(string)
				}

			}
		}

		settings := &SettingsResponse{
			Auth: &Auth{
				Enabled: cfg.Auth.Enabled,
				Options: options,
			},
			DefaultNamespace:            cfg.DefaultNamespace,
			ShowTemporalSystemNamespace: cfg.ShowTemporalSystemNamespace,
			FeedbackURL:                 cfg.FeedbackURL,
			NotifyOnNewVersion:          cfg.NotifyOnNewVersion,
			Codec:                       codec,
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

func validateAuth(c echo.Context, cfgProvider *config.ConfigProviderWithRefresh) error {
	cfg, err := cfgProvider.GetConfig()
	if err != nil {
		return err
	}

	isEnabled := cfg.Auth.Enabled
	if !isEnabled {
		return nil
	}

	sess, _ := session.Get("auth", c)
	if sess == nil {
		return echo.NewHTTPError(http.StatusUnauthorized, "unauthorized")
	}

	token := sess.Values["access-token"]
	if token == nil {
		return echo.NewHTTPError(http.StatusUnauthorized, "unauthorized")
	}

	return nil
}
