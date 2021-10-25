[![build](https://github.com/temporalio/ui-server/actions/workflows/ci.yml/badge.svg)](https://github.com/temporalio/ui-server/actions/workflows/ci.yml)

# Development
Pre-requirements:
 - Go v1.16 or later installed on your development machine
 - Protobuf installed on your development machine (`brew install protobuf`)

For first run, execute from the project folder:
``` bash
make
```

This will install required tools, build the project and create an executable `webv2`

To start the server, execute
```
./web-go start
```

- Open http://localhost:8080/ in the browser to explore the UI
- Open http://localhost:8080/openapi/ in the browser to explore HTTP API

## Debugging
In VSCode launch "Debug Server" script (or press F5)
