import { ActionCreator } from "typesafe-actions/dist/types";
import { Satoshi } from "walletts-core";

// actions
export type AccountsAction =
  | {
      type: "TOGGLE_ACCOUNT";
      payload: { id: string };
    }
  | {
      type: "UPDATE_BALANCE";
      payload: { newBalance: Satoshi; id: string };
    };

// action creators
export type toggleAccount = ActionCreator;
export function toggleAccount(id: string): AccountsAction {
  return { type: "TOGGLE_ACCOUNT", payload: { id } };
}
