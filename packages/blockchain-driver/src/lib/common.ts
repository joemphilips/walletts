import { MemoryStream } from "xstream";

export interface BlockchainAgentOptionBase {
  readonly url: string;
}

// TODO: add typings
export type BlockchainSource = MemoryStream<any>
