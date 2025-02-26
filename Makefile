top = $(shell git rev-parse --show-toplevel)

all: build

new: clean build

.PHONY: clean
clean:
	bin/clean

build:
	bin/build
