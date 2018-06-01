import { AccountDomainState, defaultAccount } from "./account";
import { SocialDomainState, defaultSocial } from "./social";
import { UserDomainState, defaultUserState } from "./user";
import { ThemeConfig } from "../interfaces";
import { ConfigDomainState, defaultConfigState } from "./config";

export interface DomainState {
  readonly theme: ThemeConfig | null;
  readonly account: AccountDomainState;
  readonly social: SocialDomainState;
  readonly user: UserDomainState;
  readonly config: ConfigDomainState;
}

const defaultState: DomainState = {
  theme: null,
  account: defaultAccount,
  social: defaultSocial,
  user: defaultUserState,
  config: defaultConfigState
};

/**
 * TODO: Initialize async
 */
export function initializeState(): DomainState {
  return defaultState;
}
