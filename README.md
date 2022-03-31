[![build](https://github.com/temporalio/ui-server/actions/workflows/test.yml/badge.svg)](https://github.com/temporalio/ui-server/actions/workflows/test.yml)

# Development
Pre-requirements:
 - Go v1.18 or later installed on your development machine
 - Protobuf installed on your development machine (`brew install protobuf`) (Note: M1 macs will need `/opt/homebrew/bin` on the PATH or you may get `/bin/sh: protoc: command not found` errors (or you can [manually download protoc](http://google.github.io/proto-lens/installing-protoc.html)))

Execute from the project folder to build a binary:
``` bash
make build-server
```

This will install required tools, build the project and create an executable `ui-server`

To start the server, execute
```
./ui-server start
```

- Open http://localhost:8080/ in the browser to explore the UI
- Open http://localhost:8080/openapi/ in the browser to explore HTTP API

## Debugging
In VSCode launch "Debug Server" script (or press F5)

## Docker
This UI is published on Docker Hub: https://hub.docker.com/r/temporalio/ui

You can run this with Temporal Server using the [Temporal docker-compose](https://github.com/temporalio/docker-compose/blob/main/docker-compose.yml).
