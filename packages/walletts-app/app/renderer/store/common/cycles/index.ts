import { BaseSources, BaseSinks } from "../../../utils/interfaces";
import { createAccountsQuery } from "../../common/query";
import { WalletRequest } from "@walletts/blockchain-driver";
import xs from "xstream";
import { GraphQLRequest } from "apollo-link";

export function main(sources: BaseSources): BaseSinks {
  const walletReq$ = sources.ACTION.filter(a => a.type === "APP_INIT").mapTo({
    method: "getAccounts"
  } as WalletRequest);

  const accountReq$ = sources.Wallet.filter(x => x.type === "getAccounts")
    .map(x => x.result)
    .map(accountNames =>
      xs.fromArray<GraphQLRequest>(
        accountNames.map(n => createAccountsQuery(n))
      )
    )
    .flatten();

  const query$ = xs.merge(accountReq$);

  return {
    Wallet: walletReq$,
    Apollo: query$
  };
}
