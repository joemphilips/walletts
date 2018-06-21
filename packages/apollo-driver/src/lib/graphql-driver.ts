import { Driver } from '@cycle/run';
import { ApolloLink, execute, GraphQLRequest, makePromise } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import xs, { Stream } from 'xstream';
import flattenConcurrently from 'xstream/extra/flattenConcurrently';
import { ApolloSource } from './interfaces';

export interface DriverConstructorOption {
  readonly customApolloLink?: ApolloLink;
  readonly uri?: string;
}
export function makeGraphQLDriver({
  customApolloLink,
  uri
}: DriverConstructorOption): Driver<Stream<GraphQLRequest>, ApolloSource> {
  const link = customApolloLink
    ? customApolloLink
    : uri
      ? new HttpLink({ uri })
      : null;
  if (!link) {
    throw new Error(
      'you must specify either customApolloLink or uri to makeGraphQLDriver!'
    );
  }

  return function graphQLDriver(input$: Stream<GraphQLRequest>): ApolloSource {
    const host = input$
      .map(input => {
        return xs.fromPromise(makePromise(execute(link, input)));
      })
      .compose(flattenConcurrently);
    return host;
  };
}
