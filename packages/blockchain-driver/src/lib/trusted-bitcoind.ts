import { Driver } from '@cycle/run';
/* tslint:disable:no-submodule-imports */
import { adapt } from '@cycle/run/lib/adapt';
import Client, { ClientConstructorOption } from 'bitcoin-core';
import xs, { MemoryStream, Stream } from 'xstream';
import flattenConcurrently from 'xstream/extra/flattenConcurrently';
import { BlockchainAgentOptionBase, BlockchainSource } from './common';

export interface BitcoindRPCRequest {
  readonly method: keyof Client;
  readonly options?: any;
}

export interface BitcoindAgentOption extends BlockchainAgentOptionBase {
  readonly port: number;
  readonly password: string;
}

// TODO: Specify type for sink correctly
export const makeTrustedBitcoindDriver = (
  clientConstructorOpt?: ClientConstructorOption
): Driver<Stream<BitcoindRPCRequest>, BlockchainSource> => {
  const trustedBitcoindDriver = (
    request$: Stream<BitcoindRPCRequest>
  ): MemoryStream<any> => {
    const cli = new Client(clientConstructorOpt);

    // TODO: buffer stream and send request with real batch
    const response$ = request$
      .map(
        x =>
          x.options
            ? xs.fromPromise(cli[x.method].bind(cli)(x.options))
            : xs.fromPromise(cli[x.method].bind(cli)())
      )
      .compose(flattenConcurrently);

    return adapt(response$);
  };

  return trustedBitcoindDriver;
};
