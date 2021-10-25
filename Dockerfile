ARG BASE_SERVER_IMAGE=temporalio/base-server:1.2.0
ARG GOPROXY

##### UI builder #####
FROM golang:1.17-alpine3.14 AS ui-builder

RUN apk add --update --no-cache \
    make \
    git \
    npm

WORKDIR /home/ui-builder

# pre-build dependecies to improve subsequent build times
COPY go.mod go.sum ./
RUN go mod download
COPY ./ui/package*.json ./ui/
RUN (cd ./ui && npm install)

COPY . .
RUN make build-server

##### UI server #####
FROM ${BASE_SERVER_IMAGE} AS ui-server
WORKDIR /home/ui-server

COPY --from=ui-builder /home/ui-builder/ui-server ./
COPY docker/start-ui-server.sh ./start-ui-server.sh
COPY docker/config_template.yaml ./config/config_template.yaml

EXPOSE 8080
ENTRYPOINT ["./start-ui-server.sh"]