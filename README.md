[![build](https://github.com/temporalio/ui-server/actions/workflows/test.yml/badge.svg)](https://github.com/temporalio/ui-server/actions/workflows/test.yml)

# Development
Pre-requirements:
 - Go v1.16 or later installed on your development machine
 - Protobuf installed on your development machine (`brew install protobuf`) (Note: M1 macs will need `/opt/homebrew/bin` on the PATH or you may get `/bin/sh: protoc: command not found` errors (or you can [manually download protoc](http://google.github.io/proto-lens/installing-protoc.html)))

For first run, execute from the project folder:
``` bash
make
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
This UI is published periodically on DockerHub: https://hub.docker.com/r/temporaliotest/ui

You can run this with Temporal Server using the [experimental Temporal docker-compose](https://github.com/temporalio/docker-compose/blob/main/docker-compose-ui-experimental.yml#L60).
