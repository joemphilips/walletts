import { setup } from '@cycle/run';
import test from 'ava';
import gql from 'graphql-tag';
import xs from 'xstream';
import { makeGraphQLDriver } from './graphql-driver';

// tslint:disable no-expression-statement
export const sleep = (msec: number) =>
  new Promise(resolve => setTimeout(resolve, msec));

test('graphql driver', async t => {
  t.plan(1);
  const query = gql`
    query {
      getAccount(id: "testAccountId") {
        id
        balance
      }
    }
  `;
  const main = (_: any) => {
    return {
      Apollo: xs.of(query)
    };
  };

  const driver = {
    Apollo: makeGraphQLDriver({ uri: 'http://localhost3001' })
  };

  const { run, sources } = setup(main, driver);

  sources.Apollo.addListener({
    next: (response: any) =>
      t.is(response, { id: 'testAccountId', balance: 0.1 }),
    error: (e: any) => t.fail(e.toString()),
    complete: () => t.fail('apollo-driver must not complete')
  });

  run();
  await sleep(100);
});
