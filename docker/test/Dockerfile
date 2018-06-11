from node:8-alpine
MAINTAINER Joe Miyamoto <joemphilips@gmail.com>
SHELL ["/bin/sh", "-c"]

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN apk add --no-cache alpine-sdk python # for node-gyp

COPY package.json /usr/src/app/package.json
COPY ./tsconfig.* ./lerna.json /usr/src/app/

## currently, there are no open-source tool for coordinating docker-based testing and monorepo.
## so we ended up making one huge docker image which copies all dependency for testing the repo.
## yes, this is ugly. But verbose enough to see what is going on when debugging.
COPY ./packages/core/package.json \
  /usr/src/app/packages/core/package.json
COPY ./packages/components/package.json \
  /usr/src/app/packages/components/package.json
COPY ./packages/blockchain-driver/package.json \
  /usr/src/app/packages/blockchain-driver/package.json
COPY ./packages/walletts-app/package.json \
  /usr/src/app/packages/walletts-app/package.json

RUN yarn --no-progress

COPY ./packages/core \
  /usr/src/app/packages/core/
COPY ./packages/components \
  /usr/src/app/packages/components/
COPY ./packages/blockchain-driver \
  /usr/src/app/packages/blockchain-driver
COPY ./packages/walletts-app \
  /usr/src/app/packages/walletts-app/

RUN yarn build
