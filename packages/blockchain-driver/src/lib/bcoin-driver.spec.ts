import { setup } from '@cycle/run';
import test from 'ava';
import xs from 'xstream';
import {
  makeTrustedBcoinNodeDriver,
  makeTrustedBcoinWalletDriver
} from './bcoin-driver';
import { sleep } from './test-common';

test('bcoin node getInfo', async t => {
  t.plan(1);
  const main = _ => {
    return {
      Blockchain: xs.of({ method: 'getInfo' })
    };
  };

  const driver = makeTrustedBcoinNodeDriver({
    apiKey: 'api-key-for-testing',
    port: 18556
  });

  const { run, sources } = setup(main, { Blockchain: driver });

  sources.Blockchain.addListener({
    next: resp => {
      t.deepEqual(
        Object.keys(resp).sort(),
        [
          'version',
          'chain',
          'pool',
          'network',
          'mempool',
          'time',
          'memory',
          'type'
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

test('bcoin wallet getWalletInfo', async t => {
  t.plan(1);
  const main = _ => ({ Blockchain: xs.of({ method: 'getInfo' }) });

  const driver = makeTrustedBcoinWalletDriver({
    apiKey: 'api-key-for-testing',
    port: 18556
  });

  const { run, sources } = setup(main, { Blockchain: driver });
  sources.Blockchain.addListener({
    next: resp => {
      t.deepEqual(resp, ['hoge'], 'failed to getWalletInfo');
    },
    error: e => t.fail(e),
    complete: () => t.fail('bcoin driver must not complete')
  });

  run();
  await sleep(2000);
});
