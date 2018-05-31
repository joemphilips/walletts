import { Satoshi, User, AccountID, UserID } from "walletts-core";
import { AccountUIData } from "walletts-components";

export type IAccountState = {
  accounts: Record<AccountID, AccountUIData>;
};
export const defaultUsers: Record<UserID, User> = {
  "default user id": {
    kind: "User",
    id: "default user id",
    name: "joemphilips",
    knownAddresses: [],
    nextAddressToPay: "btc10000000000000000"
  }
};

export const defaultAccounts: IAccountState = {
  accounts: {
    "default account id": {
      icon: "defaultIcon",
      webview: null,
      id: "default account id",
      member: defaultUsers,
      owners: defaultUsers,
      balance: Satoshi.fromNumber(1000).value,
      isActive: true
    } as AccountUIData
  }
};
