import { Satoshi, User } from "walletts-core";
import { IState } from "./reducers";
import { AccountUIData } from "walletts-components";

export const defaultUsers: ReadonlyArray<User> = [
  {
    kind: "User",
    id: "default user id",
    name: "joemphilips",
    knownAddresses: [],
    nextAddressToPay: "btc10000000000000000"
  }
];

export const defaultState: IState = {
  counter: 0,
  accountsInfo: [
    {
      icon: "defaultIcon",
      webview: null,
      member: defaultUsers,
      id: "default",
      owners: defaultUsers,
      balance: Satoshi.fromNumber(1000).value
    } as AccountUIData
  ]
};
