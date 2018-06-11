import * as Cycle from '@cycle/run';
import test from 'ava';
import xs, { Stream } from 'xstream';
import { BitcoindRPCRequest, makeTrustedBitcoindDriver } from './';
import { BlockchainSource } from './interfaces';

interface Sources {
  readonly Blockchain: BlockchainSource;
}

interface Sinks {
  readonly Blockchain: Stream<BitcoindRPCRequest>;
}
const sleep = (msec: number) =>
  new Promise(resolve => setTimeout(resolve, msec));

test('handle error when failed to connect', async t => {
  t.plan(1);
  const main = (_: Sources): Sinks => {
    return {
      Blockchain: xs.of<BitcoindRPCRequest>({ method: 'ping' })
    };
  };

  const driver = makeTrustedBitcoindDriver({
    username: 'wrongUserName',
    password: 'wrongPassword',
    port: 18332,
    host: 'bitcoind'
  });

  const { run, sources } = Cycle.setup(main, { Blockchain: driver });
  sources.Blockchain.addListener({
    next: _ =>
      t.fail(
        'next shuold not be called when trying to send message to an unconnectable blockchain'
      ),
    error: e => t.is(e.toString(), 'RpcError: 401 Unauthorized')
  });
  run();
  await sleep(2000);
});

test('getNewAddreess', async t => {
  t.plan(2);
  const main = (_: Sources): Sinks => {
    return {
      Blockchain: xs.of<BitcoindRPCRequest>({ method: 'getNewAddress' })
    };
  };
  /* tslint:disable-next-line:no-expression-statement */
  const driver = makeTrustedBitcoindDriver({
    username: 'foo',
    password: 'bar',
    port: 18332,
    host: 'bitcoind'
  });
  const { run, sources } = Cycle.setup(main, { Blockchain: driver });

  sources.Blockchain.addListener({
    next: resp => {
      t.is(
        resp.type,
        'getNewAddress',
        "reponse must have member named `type` which specifies it's RpcMethod"
      );
      t.true(
        resp.result[0].startsWith('m') ||
          resp.result[0].startsWith('n') ||
          resp.result[0].startsWith('tb'), // regtest address starts with these prefixes
        `get newaddress successed with ${resp.result}`
      );
    },
    /* tslint:disable-next-line */
    error: e => t.log(e),
    complete: () => t.log('blockchain driver has completed')
  });

  run();
  await sleep(200);
});
