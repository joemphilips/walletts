import { adapt } from '@cycle/run/lib/adapt';
import { NodeClient, WalletClient } from 'bclient';
import xs, { MemoryStream, Stream } from 'xstream';

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

export type nodeMethodName = keyof NodeClient;
export type walletMethodName = keyof WalletClient;

export interface NodeRequest {
  readonly method: nodeMethodName;
  readonly options?: any;
}

export interface WalletRequest {
  readonly method: walletMethodName;
  readonly id: string;
  readonly options?: any;
}

export interface Response {
  readonly [key: string]: any;
}

export const makeTrustedBcoinNodeDriver = (opts: BclientOption) => {
  const TrustedBcoinNodeDriver = (
    request$: Stream<NodeRequest>
  ): MemoryStream<Response> => {
    const cli = new NodeClient(opts);
    const response$ = request$
      .map(
        x =>
          x.options
            ? xs.fromPromise(cli[x.method].bind(cli)(x.options))
            : xs.fromPromise(cli[x.method].bind(cli)())
      )
      .flatten()
      .map(r => ({ ...r, type: 'rpc' }));
    return adapt(response$);
  };

  return TrustedBcoinNodeDriver;
};

export const makeTrustedBcoinWalletDriver = (opts: BclientOption) => {
  const TrustedBcoinWalletDriver = (
    request$: Stream<WalletRequest>
  ): MemoryStream<Response> => {
    const cli = new WalletClient(opts);
    const response$ = request$
      .map(
        x =>
          x.options
            ? xs.fromPromise(cli[x.method].bind(cli)(x.id, x.options))
            : xs.fromPromise(cli[x.method].bind(cli)(x.id))
      )
      .flatten();
    return adapt(response$);
  };
  return TrustedBcoinWalletDriver;
};
