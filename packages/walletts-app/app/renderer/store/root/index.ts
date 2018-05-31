import { combineReducers, Reducer } from "redux";
import { routerReducer as routing } from "react-router-redux";
import counter, { TState as TCounterState } from "../counter/index";
import AccountReducers from "../account/reducers/account";
import { IAccountState } from "../account/store";
import { defaultAccounts } from "../account/store";

const rootReducer = combineReducers({
  accounts: AccountReducers,
  counter,
  routing: routing as Reducer<any>
});

export interface IState {
  counter: TCounterState;
  accounts: IAccountState;
}

export default rootReducer;

export const defaultState: IState = {
  counter: 0,
  accounts: defaultAccounts
};
