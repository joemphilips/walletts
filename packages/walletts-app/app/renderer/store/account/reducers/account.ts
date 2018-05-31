import { combineReducers } from "redux";
import { defaultAccounts, IAccountState } from "../store";
import { AccountsAction } from "../actions/sidebar";

export const toggleAccount = (
  state = defaultAccounts,
  action: AccountsAction
): IAccountState => {
  switch (action.type) {
    case "TOGGLE_ACCOUNT":
      const id = action.payload.id;
      const accountToUpdate = state.accounts[id];
      if (!accountToUpdate) return state;
      return {
        ...state,
        accounts: {
          ...state.accounts,
          id: { ...accountToUpdate, isActive: !accountToUpdate.isActive }
        }
      };
    default:
      return state;
  }
};

const AccountReducers = combineReducers<IAccountState>({
  toggleAccount: toggleAccount
} as any);

export default AccountReducers;
