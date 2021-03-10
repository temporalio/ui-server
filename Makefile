.ONESHELL:
.PHONY: statik

all: clean install build

##### Variables ######
ifndef GOPATH
GOPATH := $(shell go env GOPATH)
endif

GOBIN := $(if $(shell go env GOBIN),$(shell go env GOBIN),$(GOPATH)/bin)
export PATH := $(GOBIN):$(PATH)

COLOR := "\e[1;36m%s\e[0m\n"

PROTO_ROOT := proto/api
PROTO_FILES = $(shell find $(PROTO_ROOT) -name "*.proto")
PROTO_DIRS = $(sort $(dir $(PROTO_FILES)))
PROTO_OUT := ./api
PROTO_IMPORT := $(PROTO_ROOT):$(GOPATH)/src/github.com/temporalio/gogo-protobuf/protobuf

$(PROTO_OUT):
	mkdir $(PROTO_OUT)

##### Build #####
build: build-client build-server

build-client:
	(cd client && yarn build)
	statik -src=./client/build

build-server: build-grpc
	go mod tidy
	go build -o web-go ./cmd/server/main.go

build-grpc: build-gogo-grpc

build-gogo-grpc: $(PROTO_OUT)
	printf $(COLOR) "Compiling for gogo-gRPC..."
	$(foreach PROTO_DIR,$(PROTO_DIRS),protoc --proto_path=$(PROTO_IMPORT) --gogoslick_out=Mgoogle/protobuf/wrappers.proto=github.com/gogo/protobuf/types,Mgoogle/protobuf/duration.proto=github.com/gogo/protobuf/types,Mgoogle/protobuf/descriptor.proto=github.com/gogo/protobuf/protoc-gen-gogo/descriptor,Mgoogle/protobuf/timestamp.proto=github.com/gogo/protobuf/types,plugins=grpc,paths=source_relative:$(PROTO_OUT) $(PROTO_DIR)*.proto;)
	# fix grpc outputs path:
	mv -f $(PROTO_OUT)/temporal/api/* $(PROTO_OUT) && rm -rf $(PROTO_OUT)/temporal

clean:
	rm -rf ./api
	(cd client && rm -rf ./build ./node_modules)
	rm -rf ./statik

##### Install dependencies #####
install: install-submodules install-client
	go get \
		github.com/gogo/protobuf/protoc-gen-gogo \
		github.com/grpc-ecosystem/grpc-gateway/protoc-gen-grpc-gateway \
		github.com/grpc-ecosystem/grpc-gateway/protoc-gen-swagger \
		github.com/mwitkow/go-proto-validators/protoc-gen-govalidators \
		github.com/rakyll/statik

install-submodules:
	printf $(COLOR) "Updating git submodules..."
	git submodule update --init --force

install-client:
	(cd client && yarn install)
