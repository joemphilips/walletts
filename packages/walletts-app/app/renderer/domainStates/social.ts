import { Individual } from "walletts-core";

export interface SocialDomainState {
  readonly knownIndividual: {
    [key: string]: Individual;
  };
}

export const defaultSocial: SocialDomainState = {
  knownIndividual: {
    defaultmyfriendid: {
      kind: "Individual",
      name: "Alice",
      knownAddresses: [],
      nextAddressToPay: ""
    }
  }
};
