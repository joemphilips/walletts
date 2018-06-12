# walletts

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

The bitcoin-blockchain sdk for typescript and applications for managing your financial social participation.

includes following packages 
* `walletts-core` primitive for working with your own wallet.
* `walletts-app` copay-style wallet and crowdfunding application powered by electron and react-redux
* `blockchain-driver` cyclejs driver for interacting with the bitcoin blockchain
(used in app by [redux-cycles](https://github.com/cyclejs-community/redux-cycles))
* `walletts-components` reusable components used in the app.

components which represents whole page (e.g. `CrowdFundingProjectView`) must be under `wallets-app` package instead of `walletts-components`

## development

clone this repository and run
`yarn && yarn bootstrap`

and
run `yarn build` to build all packages

run `yarn dev` to launch application in development mode. this will compile every packages with `tsc -w`.
So changes in an every package will invoke HMR in the app

If you want to restart with a clean environment, run
`yarn clean && yarn bootstrap && yarn build`

## contributing

See [this project page](https://github.com/joemphilips/cycle-walletts/projects/2?add_cards_query=is%3Aopen) for current status

Please read instruction below before giving a pull request

* use `yarn cz` instead of `git commit` (except when you `--amend` ing)
* scope of the commit must be one of its sub-package's name (see `commitlint.conig.json` for exact name), or `meta` for change which affects more than 2 packages.

## testing

* `yarn test` ... run unit test in packages
* `docker-compose up --build --abort-on-container-exit walletts` ... run integration tests for all packages.
