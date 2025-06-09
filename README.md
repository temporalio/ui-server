# ui-server

[![Publish Docker image](https://github.com/temporalio/ui-server/actions/workflows/docker.yml/badge.svg)](https://github.com/temporalio/ui-server/actions/workflows/docker.yml)

## Development

https://github.com/temporalio/ui-server is automatically updated to mirror
changes to https://github.com/temporalio/ui/tree/main/server; commits should be
made to the UI repository.

For contributions follow UI's development guide https://github.com/temporalio/ui

## Building

### Local Development
```bash
make build
```

### Docker Build
```bash
docker build .
```

### Version Management
Version information is updated during the sync process from the UI repository:
- **Release syncs**: Version is automatically updated to match the release tag during sync
- **Commit syncs**: Version remains as-is from the source repository
- **Local builds**: Uses the current version from source code

The version is stored in `server/version.UIVersion` and can be retrieved at runtime.


## To View gRPC routes:
[Temporal API Workflowservice](https://github.com/temporalio/api/blob/master/temporal/api/workflowservice/v1/service.proto)
