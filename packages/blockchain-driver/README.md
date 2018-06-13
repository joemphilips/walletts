# blockchain-driver

Cycle.js driver for following blockchain clients

* [bitcoind](https://github.com/bitcoin/bitcoin)
* [bcoin](https://github.com/bcoin-org/bcoin) with both node and wallet
* ~[bitcore-wallet-service (bws)](https://github.com/bitpay/bitcore-wallet-service)~ currently not supported

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
import {makeTrustedBcoinNodeDriver, makeTrustedBcoinWalletDriver} from 'blockchain-driver'
import { run } from '@cycle/run'

const blockchainDriver = makeTrustedBcoinNodeDriver({apiKey: "my-secret-api-key", port: 18556, host: "localhost"})
const walletDriver = makeTrustedBcoinWalletDriver({/* same option with the above */})

run(main, {Blockchain: blockchainDriver, Wallet: walletDriver})
```
