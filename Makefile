.ONESHELL:
.PHONY: statik all

all:
	$(MAKE) statik
	go build -o web-go ./cmd/server/main.go

statik:
	cd client && npm run build
	cd .. && statik -src=./client/build

clean:
	rm -rf ./statik