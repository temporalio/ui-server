.ONESHELL:
.PHONY:

all: install build

##### Variables ######
ifndef GOPATH
GOPATH := $(shell go env GOPATH)
endif

GOBIN := $(if $(shell go env GOBIN),$(shell go env GOBIN),$(GOPATH)/bin)
PATH := $(GOBIN):$(PATH)

COLOR := "\e[1;36m%s\e[0m\n"

PROTO_ROOT := proto/api
PROTO_FILES = $(shell find $(PROTO_ROOT) -name "*.proto")
PROTO_DIRS = $(sort $(dir $(PROTO_FILES)))
PROTO_OUT := ./server/generated/api
PROTO_IMPORTS := \
	-I $(PROTO_ROOT) \
	-I ./proto/dependencies/github.com/grpc-ecosystem/grpc-gateway/ \
	-I ./proto/dependencies/github.com/gogo/googleapis/ \
	-I ./proto/dependencies/
PROTO_REFS := Mgoogle/protobuf/wrappers.proto=github.com/gogo/protobuf/types,Mgoogle/protobuf/duration.proto=github.com/gogo/protobuf/types,Mgoogle/protobuf/empty.proto=github.com/gogo/protobuf/types,Mgoogle/protobuf/descriptor.proto=github.com/gogo/protobuf/protoc-gen-gogo/descriptor,Mgoogle/protobuf/timestamp.proto=github.com/gogo/protobuf/types,Mgoogle/api/annotations.proto=github.com/gogo/googleapis/google/api
SWAGGERUI_OUT := ./server/generated/swagger-ui
UI_OUT := ./server/generated/ui

##### Build #####
build: build-api build-server

build-ui:
	(cd ./ui && rm -rf ./build-local ./build-cloud)
	(cd ./ui && npm run build:local)
	rm -rf $(UI_OUT)
	mkdir -p $(UI_OUT)
	cp -r ./ui/build-local/* $(UI_OUT)


build-api: build-grpc
	mkdir -p $(SWAGGERUI_OUT)
	cp -r ./third_party/OpenAPI/* $(SWAGGERUI_OUT)
	cp $(SWAGGERUI_OUT)/temporal/api/workflowservice/v1/service.swagger.json $(SWAGGERUI_OUT)
	mkdir -p $(SWAGGERUI_OUT)
	rm -rf $(SWAGGERUI_OUT)/temporal

build-server:
	go mod tidy
	go build -o web-go ./cmd/server/main.go

build-grpc:
	printf $(COLOR) "Compiling gRPC..."
	rm -rf $(PROTO_OUT)/*
	mkdir -p $(PROTO_OUT)
	rm -rf $(SWAGGERUI_OUT)/*
	mkdir -p $(SWAGGERUI_OUT)
	$(foreach PROTO_DIR,$(PROTO_DIRS),\
		protoc $(PROTO_IMPORTS) \
			--gogoslick_out=plugins=grpc,paths=source_relative,$(PROTO_REFS):$(PROTO_OUT) \
			--grpc-gateway_out=allow_patch_feature=false,paths=source_relative,$(PROTO_REFS):$(PROTO_OUT) \
			--swagger_out=$(SWAGGERUI_OUT) \
		$(PROTO_DIR)*.proto \
	;)
	# fix grpc outputs path:
	printf $(COLOR) "Fixing gRPC output paths"
	mv -f $(PROTO_OUT)/temporal/api/* $(PROTO_OUT) && rm -rf $(PROTO_OUT)/temporal

##### Install dependencies #####
install: install-submodules install-utils install-ui

install-utils:
	go get \
		github.com/temporalio/gogo-protobuf/protoc-gen-gogoslick \
		github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway \
		github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger \

install-submodules:
	printf $(COLOR) "fetching submudules..."
	git submodule update --init

update-submodules:
	printf $(COLOR) "updating submudules..."
	git submodule update --force --remote ui

install-ui:
	(cd ./ui && npm install)
