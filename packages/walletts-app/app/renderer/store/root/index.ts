import { combineReducers, Reducer } from "redux";
import { routerReducer as routing } from "react-router-redux";
import counter, { TState as TCounterState } from "../counter/index";
import AccountReducers from "../account/reducers/account";
import { IAccountState } from "../account/store";
import { defaultAccounts } from "../account/store";
import { ChannelState, createDefaultChannels } from "../channels/store";
import { ChannelReducer } from "../channels/reducers";
import { UserState, defaultKnownUsers } from "../user/state";
import { reducer as UserReducer } from "../user/reducers";

const rootReducer = combineReducers({
  accounts: AccountReducers,
  counter,
  routing: routing as Reducer<any>,
  channels: ChannelReducer as Reducer<any>,
  users: UserReducer
});

export interface IState {
  readonly counter: TCounterState;
  readonly accounts: IAccountState;
  readonly channels: ChannelState;
  readonly users: UserState;
}

export default rootReducer;

export const defaultState: IState = {
  counter: 0,
  accounts: defaultAccounts,
  channels: createDefaultChannels(),
  users: defaultKnownUsers
};

console.log(`defaultState is`);
console.log(defaultState);
