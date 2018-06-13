# blockchain-driver

Cycle.js driver for following blockchain clients

* [bitcoind](https://github.com/bitcoin/bitcoin)
* [bcoin](https://github.com/bcoin-org/bcoin)
* [bitcore-wallet-service (bws)](https://github.com/bitpay/bitcore-wallet-service) 

## Examples

### Example: bitcoind driver

```ts
import { makeTrustedBitcoindDriver } from 'blockchain-driver'
import { run } from '@cycle/run'

const blockchainDriver = makeTrustedBitcoindDriver({username: "foo", password: "bar", port: 18332})

run(main, {Blockchain: blockchainDriver})
```

### Example: bcoin driver

```ts
import {makeTrustedBcoinNodeDriver, makeTrustedBcoinWalletDriver} from 'blockchain-driver
import { run } from '@cycle/run

const blockchainDriver = makeTrustedBcoinNodeDriver({apiKey: "my-secret-api-key", port: 18556, host: "localhost"})
const walletDriver = makeTrustedBcoinWalletDriver({/* same option with the above */})

run(main, {Blockchain: blockchainDriver, Wallet: walletDriver})
```

## contributing

To run integration test, you must first run `docker-compose up` and 
`yarn integration`

bws test suite creates new wallet (and puts its pubkey onto the server) each time it runs.
But since a bws has a cap for its wallet number able to create from same ip,
you may have to re-run docker by `docker-compose down && docker-compose up`
