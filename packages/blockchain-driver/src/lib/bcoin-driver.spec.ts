import { setup } from '@cycle/run';
import test from 'ava';
import xs from 'xstream';
import { makeTrustedBcoinNodeDriver } from './bcoin-driver';
import { sleep } from './test-common';

test('getInfo', async t => {
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
      t.truthy(resp, 'failed to getInfo');
    },
    error: e => t.fail(e),
    complete: () => t.fail('bcoin driver must not complete')
  });
  run();
  await sleep(2000);
});
