import { ActionCreator } from "typesafe-actions/dist/types";
import { Action } from "redux";
export type toggleAccount = ActionCreator;
export function toggleAccount(): Action {
  return { type: "TOGGLE_ACCOUNT" };
}
