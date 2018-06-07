import { Driver } from '@cycle/run';
import { adapt } from '@cycle/run/lib/adapt';
import { NodeClient, WalletClient } from 'bclient';
import { Stream } from 'xstream';
import flattenConcurrently from 'xstream/extra/flattenConcurrently';
import { requestInputToResponse$ } from './common';
import {
  BcoinResponse,
  nodeMethodName,
  SupportedBchType,
  walletMethodName
} from './interfaces';

export interface BclientOption {
  readonly apiKey?: string;
  readonly ssl?: boolean;
  readonly host?: string;
  readonly port?: number;
  readonly path?: string;
  readonly username?: string;
  readonly password?: string;
  readonly id?: string;
  readonly token?: string;
}

export interface NodeRequest {
  readonly method: nodeMethodName;
  readonly options?: any;
}

export interface WalletRequest {
  readonly method: walletMethodName;
  readonly id: string;
  readonly options?: any;
}

export const makeTrustedBcoinNodeDriver = (
  opts: BclientOption
): Driver<Stream<NodeRequest>, Stream<BcoinResponse>> => {
  const TrustedBcoinNodeDriver = (
    request$: Stream<NodeRequest>
  ): Stream<BcoinResponse> => {
    const cli = new NodeClient(opts);
    const response$ = request$
      .map(x => requestInputToResponse$(cli, x, SupportedBchType.BCOIN))
      .flatten();
    return adapt(response$);
  };

  return TrustedBcoinNodeDriver;
};

export const makeTrustedBcoinWalletDriver = (
  opts: BclientOption
): Driver<Stream<WalletRequest>, Stream<BcoinResponse>> => {
  const TrustedBcoinWalletDriver = (
    request$: Stream<WalletRequest>
  ): Stream<BcoinResponse> => {
    const cli = new WalletClient(opts);
    const response$ = request$
      .map(x => requestInputToResponse$(cli, x, SupportedBchType.BCOIN))
      .compose(flattenConcurrently);
    return adapt(response$);
  };
  return TrustedBcoinWalletDriver;
};
