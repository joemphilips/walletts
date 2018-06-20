import { setup } from '@cycle/run';
import test from 'ava';
import { gql } from 'graphql-tag'
import xs from 'xstream';
import { makeGraphQLDriver } from './graphql-driver';

// tslint:disable no-expression-statement
export const sleep = (msec: number) =>
  new Promise(resolve => setTimeout(resolve, msec));

test('graphql driver', async t => {
  const query = gql``
  const main = _ => {
    return {
      Apollo: xs.of()
    };
  };

  const driver = {
    Apollo: makeGraphQLDriver({uri: 'https://api.github.com/graphql'})
  };

  const { run, sources } = setup(main, driver);

  sources.Apollo.addListener({
    next: _ => t.fail()
  });

  run();
});
