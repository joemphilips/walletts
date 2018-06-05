import { UserID } from "walletts-core";
import { UserUIData } from "walletts-components";

export type UserState = Record<UserID, UserUIData>;

export const defaultUsers: UserState = {
  defaultuserid: {
    kind: "User",
    id: "defaultuserid",
    isMe: true,
    name: "joemphilips",
    knownAddresses: [],
    nextAddressToPay: "btc10000000000000000"
  }
};

export const defaultKnownUsers: UserState = {
  defaultfriendid: {
    kind: "User",
    id: "defaultfriendid",
    isMe: false,
    name: "Alice",
    knownAddresses: [],
    nextAddressToPay: "btc11111111111111111"
  }
};
