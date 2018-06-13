import { NodeClient, WalletClient } from 'bclient';
import Client from 'bitcoin-core';
import { Stream } from 'xstream';
export enum SupportedBchType {
  BITCOIN_CORE = 'bitcoin-core',
  BCOIN = 'bcoin'
}

export interface BlockchainAgentOptionBase {
  readonly url: string;
}

// TODO: add typings
export interface BitcoindResponse {
  readonly nodeType: SupportedBchType.BITCOIN_CORE;
  readonly type: keyof Client | 'zmqtx' | 'zmqblock';
  readonly result: any;
  readonly meta: any;
}

export type nodeMethodName = keyof NodeClient;
export type walletMethodName = keyof WalletClient;
export interface BcoinResponse {
  readonly nodeType: SupportedBchType.BCOIN;
  readonly type: nodeMethodName | walletMethodName | keyof Client | 'websocket';
  readonly result: any;
  readonly meta: any;
}

export type BlockchainSource = Stream<BitcoindResponse | BcoinResponse>;
