import { Stream } from "xstream";
import { RequestOptions, HTTPSource } from "@cycle/http";
import { BitcoindRPCRequest } from "blockchain-driver";
import { BitcoindResponse } from "../../../../blockchain-driver/build/main/lib/interfaces";

export type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;

export interface BaseSources {
  readonly ACTION: Stream<any>;
  readonly Blockchain: Stream<BitcoindResponse>;
  readonly HTTP?: HTTPSource;
}

export interface BaseSinks {
  readonly ACTION?: Stream<any>;
  readonly Blockchain?: Stream<BitcoindRPCRequest>;
  readonly HTTP?: Stream<RequestOptions>;
}
