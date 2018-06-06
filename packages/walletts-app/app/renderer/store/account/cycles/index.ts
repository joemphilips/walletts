import { BaseSources, BaseSinks } from "../../../utils/interfaces";
import { AccountsAction } from "../actions";
import xs, { Stream } from "xstream";

export interface Sinks extends BaseSinks {
  readonly Action: Stream<AccountsAction>;
}

export function main(sources: BaseSources) {
  const getBalance$ = sources.ACTION.filter(
    a => a.type === "FETCH_BALANCE"
  ).mapTo({ method: "getbalance" });

  const newBalance = sources.Blockchain.filter(resp => resp.);
  const blockchainRequest$ = xs.merge(getBalance$);
  return {
    Blockchain: blockchainRequest$
  };
}
