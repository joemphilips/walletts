from node:8-alpine
MAINTAINER Joe Miyamoto <joemphilips@gmail.com>
SHELL ["/bin/sh", "-c"]

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json

RUN yarn --no-progress

COPY . /usr/src/app/
