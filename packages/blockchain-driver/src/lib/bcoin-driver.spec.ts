import { setup } from '@cycle/run';
import test from 'ava';
import xs from 'xstream';
import fromDiagram from 'xstream/extra/fromDiagram';
import {
  makeTrustedBcoinNodeDriver,
  makeTrustedBcoinWalletDriver,
  NodeRequest
} from './bcoin-driver';
import { sleep } from './test-common';

test('bcoin node getInfo', async t => {
  t.plan(2);
  const main = _ => {
    return {
      Blockchain: xs.of<NodeRequest>({ method: 'getInfo' })
    };
  };

  // this must accord to the docker-compose file in root level
  const driver = makeTrustedBcoinNodeDriver({
    apiKey: 'api-key-for-testing',
    port: 18556,
    host: 'bcoin'
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
  t.plan(2);
  const blockchainSink = fromDiagram('-c-----i-----|', {
    values: {
      c: { id: 'test1', method: 'createWallet' },
      i: { id: 'test1', method: 'getInfo' }
    }
  });
  const main = _ => ({
    Blockchain: blockchainSink
  });

  // this must accord to the docker-compose file in root level
  const driver = makeTrustedBcoinWalletDriver({
    apiKey: 'api-key-for-testing',
    port: 18558,
    host: 'bcoin'
  });

  const { run, sources } = setup(main, { Blockchain: driver });
  sources.Blockchain.debug('result from wallet driver was')
    .drop(1)
    .addListener({
      next: resp => {
        t.is(
          resp.meta.walletId,
          'test1',
          'request to wallet must have `meta` field describing wallet id'
        );
        t.deepEqual(
          Object.keys(resp.result).sort(),
          [
            'accountDepth',
            'balance',
            'id',
            'master',
            'network',
            'token',
            'tokenDepth',
            'watchOnly',
            'wid'
          ].sort(),
          'failed to getWalletInfo'
        );
      },
      error: e => t.fail(e),
      complete: () => t.fail('bcoin driver must not complete')
    });

  run();
  await sleep(5000);
});
