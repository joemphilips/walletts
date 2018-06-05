import { defaultUsers, UserState } from "../state";
import { Actions } from "../actions";

export function reducer(state = defaultUsers, action: Actions): UserState {
  return state;
}
