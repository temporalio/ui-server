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

package main

import (
	"fmt"
	"os"
	"path"

	"github.com/temporalio/ui-server/server"
	"github.com/temporalio/ui-server/server/config"
	"github.com/temporalio/ui-server/server/server_options"
	"github.com/urfave/cli/v2"
)

// main entry point for the web server
func main() {
	app := buildCLI()
	_ = app.Run(os.Args)
}

// buildCLI is the main entry point for the web server
func buildCLI() *cli.App {
	app := cli.NewApp()
	app.Name = "Web"
	app.Usage = "Temporal Web"
	app.Version = "0.1.0"
	app.ArgsUsage = " "
	app.Flags = []cli.Flag{
		&cli.StringFlag{
			Name:    "root",
			Aliases: []string{"r"},
			Value:   ".",
			Usage:   "root directory of execution environment",
			EnvVars: []string{config.EnvKeyRoot},
		},
		&cli.StringFlag{
			Name:    "config",
			Aliases: []string{"c"},
			Value:   "config",
			Usage:   "config dir path relative to root",
			EnvVars: []string{config.EnvKeyConfigDir},
		},
		&cli.StringFlag{
			Name:    "env",
			Aliases: []string{"e"},
			Value:   "development",
			Usage:   "runtime environment",
			EnvVars: []string{config.EnvKeyEnvironment},
		}}

	app.Commands = []*cli.Command{
		{
			Name:      "start",
			Usage:     "Start Web UI server",
			ArgsUsage: " ",
			Flags:     []cli.Flag{},
			Action: func(c *cli.Context) error {
				env := c.String("env")
				configDir := path.Join(c.String("root"), c.String("config"))

				cfg, err := config.LoadConfig(configDir, env)
				if err != nil {
					return cli.Exit(fmt.Sprintf("Unable to load configuration: %v.", err), 1)
				}

				s := server.NewServer(
					server_options.WithConfig(cfg),
				)
				defer s.Stop()
				err = s.Start()
				if err != nil {
					return cli.NewExitError(fmt.Sprintf("Unable to start server: %v.", err), 1)
				}
				return cli.NewExitError("All services are stopped.", 0)
			},
		},
	}
	return app
}
