import { Driver } from '@cycle/run';
import { adapt } from '@cycle/run/lib/adapt';
import { BclientOption, NodeClient, WalletClient } from 'bclient';
import xs, { Stream } from 'xstream';
import flattenConcurrently from 'xstream/extra/flattenConcurrently';
import { requestInputToResponse$ } from './common';
import {
  BcoinResponse,
  nodeMethodName,
  SupportedBchType,
  walletMethodName
} from './interfaces';

export interface BclientOptionSafe extends BclientOption {
  readonly apiKey: string;
}

// ------ node ---------
export interface NodeRequest {
  readonly method: nodeMethodName;
  readonly options?: any;
}

export const makeTrustedBcoinNodeDriver = (
  opts: BclientOptionSafe
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

// ------ wallet ---------
export interface WalletRPCRequest {
  readonly method: walletMethodName;
  readonly id: string;
  readonly options?: any;
}
export interface SocketConnect {
  readonly method: 'SOCKET_CONNECT';
  readonly payload: any;
}
export interface SocketClose {
  readonly method: 'SOCKET_CLOSE';
  readonly payload: any;
}
export interface SocketEmit {
  readonly method: 'SOCKET_EMIT';
  readonly paylod: any;
}

export type SocketRequest = SocketConnect | SocketClose | SocketEmit;

export type WalletRequest =
  | WalletRPCRequest
  | SocketConnect
  | SocketClose
  | SocketEmit;

export interface SocketOptions {
  readonly url: string;
}

function isSocketRequest(req: WalletRequest): req is SocketRequest {
  return (
    req.method === 'SOCKET_CONNECT' ||
    req.method === 'SOCKET_CLOSE' ||
    req.method === 'SOCKET_EMIT'
  );
}

// TODO: update this function
function handleSocketRequest(req: SocketRequest): BcoinResponse {
  // tslint:disable-next-line
  console.log(req); // to avoid `declare but never used` error temporary
  return {
    type: 'websocket',
    nodeType: SupportedBchType.BCOIN,
    result: 'websocket not supported yet',
    meta: {}
  };
}

export const makeTrustedBcoinWalletDriver = (
  opts: BclientOptionSafe,
  listenSocket?: SocketOptions | boolean
): Driver<Stream<WalletRequest>, Stream<BcoinResponse>> => {
  const TrustedBcoinWalletDriver = (
    request$: Stream<WalletRequest>
  ): Stream<BcoinResponse> => {
    const cli = new WalletClient(opts);

    const rpcResponse$ = request$
      .filter(req => !isSocketRequest(req))
      .map(x => requestInputToResponse$(cli, x, SupportedBchType.BCOIN))
      .compose(flattenConcurrently);

    const socketResponse$ = request$
      .filter(req => isSocketRequest(req))
      .map(req => handleSocketRequest(req as SocketRequest));

    // tslint:disable-next-line
    console.log(listenSocket); // to avoid `declare but never used` error temporary

    const response$ = xs.merge(rpcResponse$, socketResponse$);
    return adapt(response$);
  };
  return TrustedBcoinWalletDriver;
};
