import { ActionCreator } from "typesafe-actions/dist/types";
import { Satoshi } from "@walletts/core";

// actions
export type AccountsAction =
  | {
      type: "TOGGLE_ACCOUNT";
      payload: { id: string };
    }
  | {
      type: "UPDATE_BALANCE";
      payload: { newBalance: Satoshi; id: string };
    }
  | {
      type: "FETCH_BALANCE";
      payload: { id: string };
    };

// action creators
export type toggleAccount = ActionCreator;
export function toggleAccount(id: string): AccountsAction {
  return { type: "TOGGLE_ACCOUNT", payload: { id } };
}
export function updateBalance(id: string, newBalance: Satoshi): AccountsAction {
  return { type: "UPDATE_BALANCE", payload: { newBalance, id } };
}
export function fetchBalance(id: string): AccountsAction {
  return { type: "FETCH_BALANCE", payload: { id } };
}
