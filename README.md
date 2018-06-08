# walletts

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
`lerna bootstrap`

and
run `yarn build` to build all packages
run `yarn test` ro run tests in all packages
run `yarn dev` to launch application in development mode. this will compile every packages with `tsc -w`.
So changes in an arbitrary package will invoke HMR in the app

If you want to restart with clean environment, run
`yarn clean && yarn bootstrap && yarn build`
