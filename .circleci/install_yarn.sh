#!/bin/bash
# Choose which version of yarn you want to use
EXPECTED_YARN_VERSION="0.16.1"
set -x

## install npm
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get update && sudo apt-get install -y nodejs npm
sudo npm install npm -g

npm install -g nvm
nvm install 8
nvm alias default 8
nvm use default
npm install -g yarn

curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list

sudo apt-get update && sudo apt-get install yarn
