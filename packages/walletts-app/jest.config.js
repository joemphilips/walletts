module.exports = {
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/internals/mocks/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy"
  },
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js"
  ],
  "globals": {
    "ts-jest": {
      // "enableTsDiagnostics": true,
      "tsConfigFile": "tsconfig.json"
    }
  },
  "moduleDirectories": [
    "node_modules",
    "app/node_modules"
  ],
  "moduleNameMapper": {
    "^image![a-zA-Z0-9$_-]+$": "GlobalImageStub",
    "^[./a-zA-Z0-9$_-]+\\.png$": "<rootDir>/RelativeImageStub.js",
    "@walletts/(.*)": "<rootDir>/../$1"
  },
  "transform": {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  "testMatch": [
    "**/unit/**/?(*.)(spec|test).ts?(x)"
  ]
}
