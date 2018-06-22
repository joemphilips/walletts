import { Stream } from 'xstream';

export interface GraphQLResponse {
  readonly [key: string]: any;
}

export type ApolloSource = Stream<GraphQLResponse>;
