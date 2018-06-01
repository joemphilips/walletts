import { EntityID } from "walletts-core";

/**
 * State which represents for a current state for the User using this app.
 */
export interface UserDomainState {
  notification: {
    from: EntityID;
    type: NotificationType;
  };
}

export enum NotificationType {
  NewCommunity = 0,
  CommunityPurchase
}

export const defaultUserState: UserDomainState = {
  notification: {
    from: "defaultmyfriendid",
    type: NotificationType.CommunityPurchase
  }
};
