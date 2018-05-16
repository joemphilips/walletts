# walletts

The bitcoin-blockchain sdk for typescript and applications for managing your financial social participation.

includes following packages

* `@walletts/core` primitive for working with your own wallet.
* `@walletts/cycle-electron` copay-style wallet and crowdfunding application powered by electron and cyclejs
* `@walletts/blockchain-driver` cyclejs driver for interacting with the bitcoin blockchain

small components which has specific purpose (e.g. `walletInformationContainer`, `Button`)
must be placed into separated packages from `cycle-electron` and must specify `cycle-electron` as its `peerDependencies`.

large components (e.g. `Header` `CrowdFundingPage`) must be in a directory under `cycle-electron`

## development

clone this repository and run
`lerna bootstrap`

run `yarn build` to build all packages
run `yarn test` ro run tests in all packages
run `yarn dev` to launch application in development mode.
