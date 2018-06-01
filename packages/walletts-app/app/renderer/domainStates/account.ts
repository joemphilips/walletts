import { EntityID, CommunityStatus, Satoshi } from "walletts-core";

export interface AccountDomainState {
  [key: string]: {
    readonly name: string;
    readonly members: ReadonlyArray<EntityID>;
    readonly owners: ReadonlyArray<EntityID>;
    readonly communityStatus: CommunityStatus;
    readonly isFocused: boolean; // if it is the one watching right now
    readonly balance: Satoshi;
    readonly iconUrl: string;
  };
}

export const defaultAccount: AccountDomainState = {
  defaultaccountid: {
    name: "my default wallet info",
    members: ["myuserid"],
    owners: ["myuserid"],
    communityStatus: CommunityStatus.NotCommunity,
    isFocused: true,
    balance: Satoshi.fromNumber(0).value as Satoshi,
    iconUrl: ""
  }
};
