// tslint:disable:no-if-statement no-let no-console
import { adapt } from '@cycle/run/lib/adapt';
import xs from 'xstream';
import { BlockchainSource, SupportedBchType } from './interfaces';

export function requestInputToResponse$(
  cli,
  req,
  nodeType: SupportedBchType
): BlockchainSource {
  let resp$;

  if (!req.id) {
    resp$ = req.options
      ? xs.fromPromise(cli[req.method].bind(cli)(req.options))
      : xs.fromPromise(cli[req.method].bind(cli)());
  } else {
    resp$ = req.options
      ? xs.fromPromise(cli[req.method].bind(cli)(req.id, req.options))
      : xs.fromPromise(cli[req.method].bind(cli)(req.id));
  }

  const resp2$ = resp$.map(result => {
    if (result) {
      return {
        result,
        type: req.method,
        nodeType,
        meta: req.id ? { walletId: req.id } : {}
      };
    } else {
      return {
        result: `null`,
        type: req.method,
        nodeType,
        meta: req.id ? { walletId: req.id } : {}
      };
    }
  });
  const resp3$ = adapt(resp2$);
  return resp3$;
}
