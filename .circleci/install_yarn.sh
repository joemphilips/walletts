#!/bin/bash
# Choose which version of yarn you want to use
EXPECTED_YARN_VERSION="0.16.1"

function install_yarn {
  mkdir -p .yarn
  DOWNLOAD_URL="https://github.com/yarnpkg/yarn/releases/download/v$EXPECTED_YARN_VERSION/yarn-v$EXPECTED_YARN_VERSION.tar.gz"
  echo "Downloading from $DOWNLOAD_URL"
  curl -fL $DOWNLOAD_URL > .yarn/yarn.tar.gz
  tar zxf .yarn/yarn.tar.gz  --strip-components=1 -C .yarn
}

if [ -f .yarn/bin/yarn ]; then
  YARN_VERSION=$(node -e 'const fs = require("fs"); console.log(JSON.parse(fs.readFileSync(".yarn/package.json")).version);')
  if [ "$YARN_VERSION" != "$EXPECTED_YARN_VERSION" ]; then
    echo "The yarn version is $YARN_VERSION, expected $EXPECTED_YARN_VERSION. Re-downloading"
    rm -rf .yarn
    install_yarn
  fi
else
  echo "The file .yarn/bin/yarn does not exist, installing yarn".
  install_yarn
fi

