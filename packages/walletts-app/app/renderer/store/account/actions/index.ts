import { ActionCreator } from "typesafe-actions/dist/types";
export type toggleAccount = ActionCreator;
export function toggleAccount(id: string): AccountsAction {
  return { type: "TOGGLE_ACCOUNT", payload: { id } };
}

export type AccountsAction = {
  type: "TOGGLE_ACCOUNT";
  payload: { id: string };
};
