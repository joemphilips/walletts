import { Satoshi, AccountID } from "walletts-core";
import { AccountUIData } from "walletts-components";
import { createDefaultChannels } from "../../channels/state";
import { defaultUsers, defaultKnownUsers } from "../../user/state";

export type IAccountState = {
  accounts: Record<AccountID, AccountUIData>;
};
const defaultChannelIDs = Object.keys(createDefaultChannels());
const defaultUserIDs = Object.keys(defaultUsers);
const defaultKnownUserIDs = Object.keys(defaultKnownUsers);
export const defaultAccounts: IAccountState = {
  accounts: {
    defaultaccountid: {
      id: "defaultaccountid",
      iconUrl: "fas fa-wallet",
      webview: null,
      member: defaultUserIDs,
      owners: defaultKnownUserIDs,
      balance: Satoshi.fromNumber(1000).value,
      isActive: true,
      integratedChannels: defaultChannelIDs,
      visibleChannel: defaultChannelIDs[0]
    } as AccountUIData,
    seconddefaultaccountid: {
      id: "seconddefaultaccountid",
      iconUrl: "fas fa-users",
      webview: null,
      member: defaultUserIDs,
      owners: defaultKnownUserIDs,
      balance: Satoshi.fromNumber(1000).value as Satoshi,
      isActive: false,
      integratedChannels: defaultChannelIDs,
      visibleChannel: defaultChannelIDs[0]
    }
  }
};
