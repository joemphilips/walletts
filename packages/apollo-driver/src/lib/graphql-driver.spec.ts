import { setup } from '@cycle/run';
import { HttpLink } from 'apollo-link-http';
import test from 'ava';
import fetch from 'cross-fetch';
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
  const operation = {
    query
  };
  const main = (_: any) => {
    return {
      Apollo: xs.of(operation)
    };
  };

  const driver = {
    Apollo: makeGraphQLDriver({
      customApolloLink: new HttpLink({
        uri: 'http://mock:3001/graphql',
        fetch
      })
    })
  };

  const { run, sources } = setup(main, driver);
  const expected = {
    getAccount: { id: 'testAccountId', balance: 0.1 }
  };

  sources.Apollo.addListener({
    next: (response: any) => {
      // tslint:disable-next-line
      console.log('response is');
      // tslint:disable-next-line
      console.log(response);

      t.deepEqual(response.data, expected, 'OK');
    },
    error: (e: any) => t.fail(e.toString()),
    complete: () => t.fail('apollo-driver must not complete')
  });

  run();
  await sleep(1000);
});
