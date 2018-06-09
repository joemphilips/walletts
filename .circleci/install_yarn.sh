#!/bin/bash
# Choose which version of yarn you want to use
EXPECTED_YARN_VERSION="0.16.1"
set -x

## install npm
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash

export NVM_DIR="/opt/circleci/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm + nvm install 8

nvm install 8
nvm alias default 8
nvm use 8
npm install -g yarn
