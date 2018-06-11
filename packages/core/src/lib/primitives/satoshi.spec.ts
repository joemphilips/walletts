import test from 'ava';
import { Satoshi } from './satoshi';

// tslint:disable:no-expression-statement
test('satoshi', t => {
  const s = Satoshi.fromBTC(10);
  const s2 = Satoshi.fromNumber(1000000000);
  t.deepEqual(s2, s);
});
