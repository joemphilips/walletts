import { Driver } from '@cycle/run';
/* tslint:disable:no-submodule-imports */
import { adapt } from '@cycle/run/lib/adapt';
import Client, { BatchOption, ClientConstructorOption } from 'bitcoin-core';
import xs, { MemoryStream, Stream } from 'xstream';
import buffer from 'xstream/extra/buffer';
import flattenConcurrently from 'xstream/extra/flattenConcurrently';
import { BlockchainAgentOptionBase, BlockchainSource } from './common';

export type BitcoindRPCRequest = BatchOption;

export interface BitcoindAgentOption extends BlockchainAgentOptionBase {
  readonly port: number;
  readonly password: string;
}

// TODO: Specify type for sink correctly
export const makeTrustedBitcoindDriver = (
  clientConstructorOpt?: ClientConstructorOption
): Driver<Stream<BitcoindRPCRequest>, BlockchainSource> => {
  const separator = xs.periodic(100);
  const trustedBitcoindDriver = (
    request$: Stream<BitcoindRPCRequest>
  ): MemoryStream<any> => {
    const client = new Client(clientConstructorOpt ? clientConstructorOpt : {});

    // TODO: buffer stream and send request with real batch
    const response$ = request$
      .compose(buffer(separator))
      .map(command => xs.fromPromise(client.command(command)))
      .compose(flattenConcurrently);

    return adapt(response$);
  };

  return trustedBitcoindDriver;
};
