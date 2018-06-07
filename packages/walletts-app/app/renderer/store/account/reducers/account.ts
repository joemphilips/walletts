import { defaultAccounts, IAccountState } from "../state";
import { AccountUIData } from "walletts-components";
import { AccountID } from "walletts-core";
import { AccountsAction } from "../actions";

function turnOff(
  record: Record<AccountID, AccountUIData>
): Record<AccountID, AccountUIData> {
  return Object.keys(record)
    .map(k => ({ [k]: { ...record[k], isActive: false } }))
    .reduce((curr, next) => ({ ...curr, ...next }));
}

export const reducer = (
  state = defaultAccounts,
  action: AccountsAction
): IAccountState => {
  const id = action.payload && action.payload.id ? action.payload.id : null;
  const accountToUpdate = id && state.accounts[id] ? state.accounts[id] : null;
  switch (action.type) {
    case "TOGGLE_ACCOUNT":
      const newState = turnOff(state.accounts);

      if (!accountToUpdate || !id) return state;
      return {
        ...state,
        accounts: {
          ...newState,
          [id]: { ...accountToUpdate, isActive: true }
        }
      };
    case "UPDATE_BALANCE":
      if (!accountToUpdate || !id) return state;
      return {
        ...state,
        accounts: {
          [id]: {
            ...accountToUpdate,
            balance: action.payload.newBalance
          }
        }
      };
    default:
      return state;
  }
};
