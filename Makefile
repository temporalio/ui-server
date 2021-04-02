.ONESHELL:
.PHONY:

all: clean install build

##### Variables ######
ifndef GOPATH
GOPATH := $(shell go env GOPATH)
endif

GOBIN := $(if $(shell go env GOBIN),$(shell go env GOBIN),$(GOPATH)/bin)
PATH := $(GOBIN):$(PATH)

COLOR := "\e[1;36m%s\e[0m\n"

##### Build #####
build: build-webui build-server

build-webui:
	(cd webui && yarn build)
	mkdir server/generated/webui
	mv webui/build/* server/generated/webui

build-server: build-grpc
	go mod tidy
	go build -o web-go ./cmd/server/main.go

PROTO_ROOT := proto/api
PROTO_FILES = $(shell find $(PROTO_ROOT) -name "*.proto")
PROTO_DIRS = $(sort $(dir $(PROTO_FILES)))
PROTO_OUT := ./generated/api
PROTO_IMPORTS := \
	-I $(PROTO_ROOT) \
	-I proto/dependencies/github.com/grpc-ecosystem/grpc-gateway/ \
	-I proto/dependencies/github.com/gogo/googleapis/ \
	-I proto/dependencies/

$(PROTO_OUT):
	mkdir $(PROTO_OUT)

PROTO_REFS := Mgoogle/protobuf/wrappers.proto=github.com/gogo/protobuf/types,Mgoogle/protobuf/duration.proto=github.com/gogo/protobuf/types,Mgoogle/protobuf/descriptor.proto=github.com/gogo/protobuf/protoc-gen-gogo/descriptor,Mgoogle/protobuf/timestamp.proto=github.com/gogo/protobuf/types,Mgoogle/api/annotations.proto=github.com/gogo/googleapis/google/api

build-grpc:
	printf $(COLOR) "Compiling gRPC..."
	rm -rf $(PROTO_OUT)/*
	$(foreach PROTO_DIR,$(PROTO_DIRS),\
		protoc $(PROTO_IMPORTS) \
			--gogoslick_out=plugins=grpc,paths=source_relative,$(PROTO_REFS):$(PROTO_OUT) \
			--grpc-gateway_out=allow_patch_feature=false,paths=source_relative,$(PROTO_REFS):$(PROTO_OUT) \
			--swagger_out=third_party/OpenAPI/ \
		$(PROTO_DIR)*.proto \
	;)
	# fix grpc outputs path:
	mv -f $(PROTO_OUT)/temporal/api/* $(PROTO_OUT) && rm -rf $(PROTO_OUT)/temporal

	# Generate static assets for OpenAPI UI
	statik -m -f -dest generated/openapi -src third_party/OpenAPI/

clean:
	rm -rf ./generated/openapi server/generated/webui
	(cd webui && rm -rf ./build)

##### Install dependencies #####
install: install-utils install-webui

install-utils:
	go get \
		github.com/gogo/protobuf/protoc-gen-gogo \
		github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway \
		github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger \
		github.com/rakyll/statik

install-webui:
	(cd webui && yarn install)
