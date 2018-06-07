import { Driver } from '@cycle/run';
/* tslint:disable:no-submodule-imports */
import { adapt } from '@cycle/run/lib/adapt';
import Client, { ClientConstructorOption } from 'bitcoin-core';
import xs, { Stream } from 'xstream';
import flattenConcurrently from 'xstream/extra/flattenConcurrently';
import { socket } from 'zeromq';
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
export interface ZeromqOption extends BlockchainAgentOptionBase {
  readonly port: number;
}

export function createZmqStream(
  option?: ZeromqOption | boolean,
  url?: string
): Stream<BitcoindResponse> {
  const normalizedURL = url ? url : '127.0.0.1';
  const normalizedPort = !option
    ? '28332'
    : typeof option === 'boolean'
      ? '28332'
      : option.port;
  const host = 'tcp://' + normalizedURL + ':' + normalizedPort;
  const sock = socket(host);
  sock.subscribe('rawblock');
  sock.subscribe('rawtransaction');
  const stream = xs.create<BitcoindResponse>({
    start: listener => {
      sock.on('message', (topic, message) => {
        listener.next({
          nodeType: SupportedBchType.BITCOIN_CORE,
          type: topic.toString() === 'zmqblock' ? 'zmqblock' : 'zmqtx',
          result: message,
          meta: {}
        });
      });
    },
    // tslint:disable-next-line
    stop: () => {}
  });
  return stream;
}

export const makeTrustedBitcoindDriver = (
  clientConstructorOpt?: ClientConstructorOption,
  zmq?: ZeromqOption | boolean
): Driver<Stream<BitcoindRPCRequest>, Stream<BitcoindResponse>> => {
  const trustedBitcoindDriver = (
    request$: Stream<BitcoindRPCRequest>
  ): Stream<BitcoindResponse> => {
    const cli = new Client(clientConstructorOpt);

    const rpcResponse$ = request$
      .map(x => requestInputToResponse$(cli, x, SupportedBchType.BITCOIN_CORE))
      .compose(flattenConcurrently);

    const response$ = zmq
      ? xs.merge(rpcResponse$, createZmqStream(zmq, clientConstructorOpt.host))
      : rpcResponse$;

    return adapt(response$);
  };

  return trustedBitcoindDriver;
};
