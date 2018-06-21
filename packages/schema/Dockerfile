from node:8-alpine
MAINTAINER Joe Miyamoto <joemphilips@gmail.com>
SHELL ["/bin/sh", "-c"]
EXPOSE 3001

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json

RUN yarn

COPY . /usr/src/app/

CMD ["yarn", "dev"]
