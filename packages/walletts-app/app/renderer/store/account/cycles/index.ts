import { BaseSources, BaseSinks } from "../../../utils/interfaces";
import { AccountsAction, updateBalance } from "../actions";
import xs, { Stream } from "xstream";

export interface Sinks extends BaseSinks {
  readonly Action: Stream<AccountsAction>;
}

export function main(sources: BaseSources) {
  const getBalance$ = sources.ACTION.filter(
    a => a.type === "FETCH_BALANCE"
  ).mapTo({ method: "getBalance" });

  const updateBalance$: Stream<number> = sources.Blockchain.filter(
    res => res.type === "getBalance"
  )
    .map(res => res.result)
    .map(result => updateBalance());
  const blockchainRequest$ = xs.merge(getBalance$);
  return {
    Blockchain: blockchainRequest$
  };
}
