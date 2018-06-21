import { Stream } from 'xstream';

export type GraphQLResponse = Stream<{
  readonly [key: string]: any;
}>;
