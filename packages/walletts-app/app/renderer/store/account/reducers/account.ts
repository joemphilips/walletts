import { defaultAccounts, IAccountState } from "../store";
import { AccountUIData } from "walletts-components";
import { AccountID } from "walletts-core";

function turnOff(
  record: Record<AccountID, AccountUIData>
): Record<AccountID, AccountUIData> {
  return Object.keys(record)
    .map(k => ({ [k]: { ...record[k], isActive: false } }))
    .reduce((curr, next) => ({ ...curr, ...next }));
}

export const reducer = (
  state = defaultAccounts,
  action: any
): IAccountState => {
  switch (action.type) {
    case "TOGGLE_ACCOUNT":
      const id = action.payload.id;
      const accountToUpdate = state.accounts[id];
      if (!accountToUpdate) return state;
      const newState = turnOff(state.accounts);

      return {
        ...state,
        accounts: {
          ...newState,
          [id]: { ...accountToUpdate, isActive: true }
        }
      };
    default:
      return state;
  }
};

export default reducer;
