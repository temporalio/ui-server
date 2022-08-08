.ONESHELL:
.PHONY:

all: install build

##### Variables ######
define NEWLINE


endef

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
	-I ./proto/dependencies/api/ \
	-I ./proto/dependencies/
PROTO_REFS := Mgoogle/protobuf/wrappers.proto=github.com/gogo/protobuf/types,Mgoogle/protobuf/duration.proto=github.com/gogo/protobuf/types,Mgoogle/protobuf/empty.proto=github.com/gogo/protobuf/types,Mgoogle/protobuf/descriptor.proto=github.com/gogo/protobuf/protoc-gen-gogo/descriptor,Mgoogle/protobuf/timestamp.proto=github.com/gogo/protobuf/types,Mgoogle/api/annotations.proto=github.com/gogo/googleapis/google/api
OPENAPI_OUT := ./server/generated/openapi
UI_OUT := ./server/generated/ui

##### Build #####
build: build-ui build-api build-server

build-cloud: build-ui-cloud build-server

build-ui:
	(cd ./ui && rm -rf ./build-local)
	(cd ./ui && VITE_API="" pnpm build:local)
	rm -rf $(UI_OUT)
	mkdir -p $(UI_OUT)
	cp -r ./ui/build-local/* $(UI_OUT)

build-ui-cloud:
	(cd ./ui && rm -rf ./build-cloud)
	(cd ./ui && VITE_API="" pnpm build:cloud)
	rm -rf $(UI_OUT)
	mkdir -p $(UI_OUT)
	cp -r ./ui/build-cloud/* $(UI_OUT)

build-api: build-grpc
	mkdir -p $(OPENAPI_OUT)
	cp -r ./third_party/OpenAPI/* $(OPENAPI_OUT)
	cp $(OPENAPI_OUT)/temporal/api/workflowservice/v1/service.swagger.json $(OPENAPI_OUT)
	mkdir -p $(OPENAPI_OUT)
	rm -rf $(OPENAPI_OUT)/temporal

build-server:
	go mod tidy
	go build -o ui-server ./cmd/server/main.go

build-grpc:
	printf $(COLOR) "Compiling gRPC..."
	rm -rf $(PROTO_OUT)/*
	mkdir -p $(PROTO_OUT)
	rm -rf $(OPENAPI_OUT)/*
	mkdir -p $(OPENAPI_OUT)
	$(foreach PROTO_DIR,$(PROTO_DIRS),\
		protoc $(PROTO_IMPORTS) \
			--gogoslick_out=plugins=grpc,paths=source_relative,$(PROTO_REFS):$(PROTO_OUT) \
			--grpc-gateway_out=allow_patch_feature=false,paths=source_relative:$(PROTO_OUT) \
			--openapiv2_out=$(OPENAPI_OUT) \
		$(PROTO_DIR)*.proto \
	;)
	# fix grpc outputs path:
	printf $(COLOR) "Fixing gRPC output paths"
	mv -f $(PROTO_OUT)/temporal/api/* $(PROTO_OUT) && rm -rf $(PROTO_OUT)/temporal

##### Install dependencies #####
install: install-submodules install-utils install-ui

install-utils:
	@go install github.com/temporalio/gogo-protobuf/protoc-gen-gogoslick@latest
	@GO111MODULE=off go get github.com/temporalio/gogo-protobuf/protoc-gen-gogoslick
	@go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest

	@go install github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway@latest
	@go install github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2@latest

install-submodules:
	printf $(COLOR) "fetching submudules..."
	git submodule update --init

update-submodules:
	printf $(COLOR) "updating submudules..."
	git submodule update --force --remote ui

install-ui:
	(cd ./ui && pnpm install)

##### Test #####
TEST_TIMEOUT := 10m
ALL_SRC         := $(shell find . -name "*.go")
TEST_DIRS       := $(sort $(dir $(filter %_test.go,$(ALL_SRC))))

ifdef TEST_TAG
override TEST_TAG := -tags $(TEST_TAG)
endif

test: clean-test-results
	@printf $(COLOR) "Running unit tests..."
	$(foreach TEST_DIRS,$(TEST_DIRS),\
		@go test $(TEST_DIRS) -timeout=$(TEST_TIMEOUT) $(TEST_TAG) -race \
	$(NEWLINE))

clean-test-results:
	@rm -f test.log
	@go clean -testcache
