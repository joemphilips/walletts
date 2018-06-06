import { BaseSources, BaseSinks } from "../../../utils/interfaces";
import { AccountsAction } from "../actions";
import { Stream } from "xstream";

export interface Sinks extends BaseSinks {
  readonly Action: Stream<AccountsAction>;
}

export function main(sources: BaseSources) {
  sources.ACTION.filter(a => a.type === "UPDATE_BALANCE");
}
