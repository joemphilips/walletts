import { Stream } from "xstream";
import { RequestOptions, HTTPSource } from "@cycle/http";
import { BitcoindRPCRequest } from "blockchain-driver";
import {
  BlockchainSource,
  BitcoindResponse
} from "../../../../blockchain-driver/build/main/lib/interfaces";

export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

export interface BaseSources {
  readonly ACTION: Stream<any>;
  readonly HTTP: HTTPSource;
  readonly Blockchain: Stream<BitcoindResponse>;
}

export interface BaseSinks {
  readonly ACTION?: Stream<any>;
  readonly HTTP?: Stream<RequestOptions>;
  readonly Blockchain?: Stream<BitcoindRPCRequest>;
}
