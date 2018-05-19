# walletts

The bitcoin-blockchain sdk for typescript and applications for managing your financial social participation.

includes following packages

* `walletts-core` primitive for working with your own wallet.
* `walletts-cycle-electron` copay-style wallet and crowdfunding application powered by electron and cyclejs
* `blockchain-driver` cyclejs driver for interacting with the bitcoin blockchain
* `walletts-components` reusable cyclejs components used in the app. It follows semantics in [semantic-ui](https://semantic-ui.com/)

components which represents whole page (e.g. `CrowdFundingProjectView`) must be under `wallets-cycle-electron` package instead of `walletts-components`

## development

clone this repository and run
`lerna bootstrap`

and
run `yarn build` to build all packages
run `yarn test` ro run tests in all packages
run `yarn dev` to launch application in development mode. this will compile every packages with `tsc -w`.
So changes in an arbitrary package will invoke HMR.
