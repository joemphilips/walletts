import { Driver } from '@cycle/run';
import { ApolloLink, execute, FetchResult, GraphQLRequest } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import xs, { Stream } from 'xstream';
import flattenConcurrently from 'xstream/extra/flattenConcurrently';
import { GraphQLResponse } from './interfaces';

export interface DriverConstructorOption {
  customApolloLink?: ApolloLink;
  uri?: string;
}
export function makeGraphQLDriver({
  customApolloLink,
  uri
}: DriverConstructorOption): Driver<Stream<any>, Stream<any>> {
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

  return function graphQLDriver(
    input$: Stream<GraphQLRequest>
  ): GraphQLResponse {
    const host = input$
      .map(input => {
        return xs.create({
          start: listener =>
            execute(link, input).map((result: FetchResult) => {
              listener.next(result);
            }),
          // tslint:disable-next-line
          stop: () => {}
        });
      })
      .compose(flattenConcurrently);
    return host;
  };
}
