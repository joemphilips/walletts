import { Driver } from '@cycle/run';
/* tslint:disable:no-submodule-imports */
import { adapt } from '@cycle/run/lib/adapt';
import Client, { ClientConstructorOption } from 'bitcoin-core';
import { Stream } from 'xstream';
import flattenConcurrently from 'xstream/extra/flattenConcurrently';
import { requestInputToResponse$ } from './common';
import {
  BitcoindResponse,
  BlockchainAgentOptionBase,
  SupportedBchType
} from './interfaces';

export interface BitcoindRPCRequest {
  readonly method: keyof Client;
  readonly options?: any;
}

export interface BitcoindAgentOption extends BlockchainAgentOptionBase {
  readonly port: number;
  readonly password: string;
}

export const makeTrustedBitcoindDriver = (
  clientConstructorOpt?: ClientConstructorOption
): Driver<Stream<BitcoindRPCRequest>, Stream<BitcoindResponse>> => {
  const trustedBitcoindDriver = (
    request$: Stream<BitcoindRPCRequest>
  ): Stream<BitcoindResponse> => {
    const cli = new Client(clientConstructorOpt);

    // TODO: buffer stream and send request with real batch
    const response$ = request$
      .map(x => requestInputToResponse$(cli, x, SupportedBchType.BITCOIN_CORE))
      .filter(x => !!x)
      .compose(flattenConcurrently);

    return adapt(response$);
  };

  return trustedBitcoindDriver;
};
