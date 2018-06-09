from node:8-alpine
MAINTAINER Joe Miyamoto <joemphilips@gmail.com>
SHELL ["/bin/sh", "-c"]

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
COPY ./tsconfig.* ./lerna.json /usr/src/app/

## currently, there are no open-source tool for coordinating docker-based testing and monorepo.
## so we ended up making one huge docker image which copies all dependency for testing the repo.
## yes, this is ugly. But verbose enough to see what is going on when debugging.

COPY ./packages/walletts-core/package.json \
  /usr/src/app/packages/walletts-core/
COPY ./packages/walletts-core/tsconfig.* \
  ./packages/walletts-core/tslint.* \
  ./usr/src/app/packages/walletts-core/
COPY ./packages/walletts-core/src \
  ./usr/src/app/packages/walletts-core/src

COPY ./packages/walletts-components/package.json \
  /usr/src/app/packages/walletts-components/
COPY ./packages/walletts-components/tsconfig.* \
  ./packages/walletts-components/tslint.* \
  ./usr/src/app/packages/walletts-components/
COPY ./packages/walletts-components/src \
  ./usr/src/app/packages/walletts-components/src

COPY ./packages/blockchain-driver/package.json \
  /usr/src/app/packages/blockchain-driver/
COPY ./packages/blockchain-driver/tsconfig.* \
  ./packages/blockchain-driver/tslint.* \
  ./usr/src/app/packages/blockchain-driver/
COPY ./packages/blockchain-driver/src \
  ./usr/src/app/packages/blockchain-driver/src

COPY ./packages/walletts-app/tsconfig.* ./packages/walletts-app/package.json ./packages/walletts-app/tslint.* ./packages/walletts-app/webpack.* ./packages/walletts-app/jest.* ./usr/src/app/packages/walletts-app/
COPY ./packages/walletts-app/app \
  ./usr/src/app/packages/walletts-app/app
COPY ./packages/walletts-app/__test__ \
  ./usr/src/app/packages/walletts-app/__test__
COPY ./packages/walletts-app/channels \
  ./usr/src/app/packages/walletts-app/channels

# RUN yarn --no-progress
