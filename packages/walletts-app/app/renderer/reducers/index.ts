import { combineReducers, Reducer } from "redux";
import { routerReducer as routing } from "react-router-redux";
import { AccountUIData } from "walletts-components";
import counter, { TState as TCounterState } from "./counter";

const rootReducer = combineReducers({
  counter,
  routing: routing as Reducer<any>
});

export interface IState {
  counter: TCounterState;
  accountsInfo: ReadonlyArray<AccountUIData>;
}

export const defaultState: IState = {
  counter: 0,
  accountsInfo: []
};

export default rootReducer;
