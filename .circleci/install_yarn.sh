#!/bin/bash
# Choose which version of yarn you want to use
EXPECTED_YARN_VERSION="0.16.1"
set -x

## install npm
npm install -g nvm
nvm install 8
nvm alias default 8
nvm use 8
npm install -g yarn
