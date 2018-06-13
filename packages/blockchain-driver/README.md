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

function main(sources) {
  // getting rpc response from blockchain
  const feeResponse$ = sources.Blockchain
    .filter(resp => resp.type === "estimateSmartFee")
    /**
     * response from the blockchain has following fields 
     * 1. result: any ... result of request, if the rpc don't have any result, it will be "null" (not `null` , its type is string )
     * 2. type: string ... name of the rpc, of "zmqtx", "zmqblock" in case of the zeromq
     * 3. noedType: string ... identifier for the blockchain, currently "bitcoind" or "bcoin"
     * 4. meta: any ... field reserved for future update, it may be used to indicate other information
     */
    .map(feeResponseRaw => feeResponseRaw.result)

  /** sending request */
  const request$ = xs.of({method: "estimateSmartFee", options: [10 /* conf target */ ]})
}
run(main, {Blockchain: blockchainDriver})
```

### Example: bcoin driver

```ts
import {makeTrustedBcoinNodeDriver, makeTrustedBcoinWalletDriver} from 'blockchain-driver'
import { run } from '@cycle/run'

const blockchainDriver = makeTrustedBcoinNodeDriver({apiKey: "my-secret-api-key", port: 18556, host: "localhost"})
const walletDriver = makeTrustedBcoinWalletDriver({/* same option with the above */})

/*
 * api is same with a bitcoind driver.
 * Except that wallet may require not only `method` and `options` but `id` for its input
 */

run(main, {Blockchain: blockchainDriver, Wallet: walletDriver})
```
