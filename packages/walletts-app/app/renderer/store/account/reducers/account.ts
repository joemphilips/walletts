import { defaultAccounts, IAccountState } from "../store";

export const toggleAccount = (
  state = defaultAccounts,
  action: any
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

export default toggleAccount;
