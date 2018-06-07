import { setup } from '@cycle/run';
import test from 'ava';
import xs from 'xstream';
import {
  makeTrustedBcoinNodeDriver,
  makeTrustedBcoinWalletDriver,
  NodeRequest,
  WalletRequest
} from './bcoin-driver';
import { sleep } from './test-common';

test('bcoin node getInfo', async t => {
  t.plan(2);
  const main = _ => {
    return {
      Blockchain: xs.of<NodeRequest>({ method: 'getInfo' })
    };
  };

  const driver = makeTrustedBcoinNodeDriver({
    apiKey: 'api-key-for-testing',
    port: 18556
  });

  const { run, sources } = setup(main, { Blockchain: driver });

  sources.Blockchain.addListener({
    next: resp => {
      t.is(
        resp.type,
        'getInfo',
        "reponse must have member named `type` which specifies it's RpcMethod"
      );
      t.deepEqual(
        Object.keys(resp.result).sort(),
        [
          'version',
          'chain',
          'pool',
          'network',
          'mempool',
          'time',
          'memory'
        ].sort(),
        'failed to getInfo'
      );
    },
    error: e => t.fail(e),
    complete: () => t.fail('bcoin driver must not complete')
  });
  run();
  await sleep(2000);
});

test('bcoin wallet getInfo', async t => {
  t.plan(1);
  const main = _ => ({
    Blockchain: xs.from<WalletRequest>([
      { id: 'test1', method: 'createWallet' },
      { id: 'test1', method: 'getInfo' }
    ])
  });

  const driver = makeTrustedBcoinWalletDriver({
    apiKey: 'api-key-for-testing',
    port: 18556
  });

  const { run, sources } = setup(main, { Blockchain: driver });
  sources.Blockchain.addListener({
    next: resp => {
      t.deepEqual(
        Object.keys(resp.result).sort(),
        [
          'account',
          'accountDepth',
          'id',
          'initialized',
          'master',
          'network',
          'state',
          'token',
          'tokenDepth',
          'watchOnly',
          'wid'
        ].sort(),
        'failed to getWalletInfo'
      );
    },
    error: e =>
      e.toString() === 'Error: WDB: Wallet already exists.'
        ? t.pass()
        : t.fail(e),
    complete: () => t.fail('bcoin driver must not complete')
  });

  run();
  await sleep(2000);
});
