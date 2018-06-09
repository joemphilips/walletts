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

COPY ./packages/walletts-core \
  /usr/src/app/packages/walletts-core/
COPY ./packages/walletts-components \
  /usr/src/app/packages/walletts-components/
COPY ./packages/blockchain-driver \
  /usr/src/app/packages/blockchain-driver
COPY ./packages/walletts-app \
  /usr/src/app/packages/walletts-app/

RUN yarn --no-progress
RUN yarn build
