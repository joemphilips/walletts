import { Stream } from "xstream";
import { RequestOptions, HTTPSource } from "@cycle/http";
import {
  BlockchainSource,
  WalletRequest,
  NodeRequest
} from "blockchain-driver";
import { ApolloSource } from "apollo-driver";
import { GraphQLRequest } from "apollo-link";

export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

export interface BaseSources {
  readonly ACTION: Stream<any>;
  readonly Blockchain: BlockchainSource;
  readonly Wallet: BlockchainSource;
  readonly HTTP?: HTTPSource;
  readonly Apollo: ApolloSource;
}

export interface BaseSinks {
  readonly ACTION?: Stream<any>;
  readonly Blockchain?: Stream<NodeRequest>;
  readonly Wallet?: Stream<WalletRequest>;
  readonly HTTP?: Stream<RequestOptions>;
  readonly Apollo?: Stream<GraphQLRequest>;
}
