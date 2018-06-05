import { Satoshi, User, AccountID, UserID } from "walletts-core";
import { AccountUIData } from "walletts-components";
import { createDefaultChannels } from "../../channels/store";

export type IAccountState = {
  accounts: Record<AccountID, AccountUIData>;
};
export const defaultUsers: Record<UserID, User> = {
  defaultuserid: {
    kind: "User",
    id: "defaultuserid",
    name: "joemphilips",
    knownAddresses: [],
    nextAddressToPay: "btc10000000000000000"
  }
};

export const defaultKnownUsers: Record<UserID, User> = {
  defaultfriendid: {
    kind: "User",
    id: "defaultfriendid",
    name: "Alice",
    knownAddresses: [],
    nextAddressToPay: "btc11111111111111111"
  }
};

const defaultChannelIDs = Object.keys(createDefaultChannels());
export const defaultAccounts: IAccountState = {
  accounts: {
    defaultaccountid: {
      id: "defaultaccountid",
      iconUrl: "fas fa-wallet",
      webview: null,
      member: defaultUsers,
      owners: defaultUsers,
      balance: Satoshi.fromNumber(1000).value,
      isActive: true,
      integratedChannels: defaultChannelIDs,
      visibleChannel: defaultChannelIDs[0]
    } as AccountUIData,
    seconddefaultaccountid: {
      id: "seconddefaultaccountid",
      iconUrl: "fas fa-users",
      webview: null,
      member: Object.assign({}, defaultUsers, defaultKnownUsers),
      owners: Object.assign({}, defaultUsers, defaultKnownUsers),
      balance: Satoshi.fromNumber(1000).value as Satoshi,
      isActive: false,
      integratedChannels: defaultChannelIDs,
      visibleChannel: defaultChannelIDs[0]
    }
  }
};
