import { BaseSources, BaseSinks } from "../../../utils/interfaces";
import { AccountsAction, updateBalance } from "../actions";
import xs, { Stream } from "xstream";

export interface Sinks extends BaseSinks {
  readonly Action: Stream<AccountsAction>;
}

export function main(sources: BaseSources) {
  // ACTION ---------> Blockchain
  const getBalance$ = sources.ACTION.filter(
    a => a.type === "FETCH_BALANCE"
  ).mapTo({ method: "getBalance" });
  const blockchainRequest$ = xs.merge(getBalance$);

  // Blockchain --------> Actoin
  const updateBalance$: Stream<AccountsAction> = sources.Blockchain.filter(
    res => res.type === "getBalance"
  )
    .map(res => [res.meta.walletId, res.result])
    .map(result => updateBalance(result[0], result[1]));

  const action$ = xs.merge(updateBalance$);
  return {
    Action: action$,
    Blockchain: blockchainRequest$
  };
}
