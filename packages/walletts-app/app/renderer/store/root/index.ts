import { combineReducers, Reducer } from "redux";
import { routerReducer as routing } from "react-router-redux";
import { HTTPSource, RequestOptions } from "@cycle/http";
import xs from "xstream";
import counter, { TState as TCounterState } from "../counter/index";
import AccountReducers from "../account/reducers/account";
import { IAccountState } from "../account/store";
import { defaultAccounts } from "../account/store";
import { ChannelState, createDefaultChannels } from "../channels/store";
import { ChannelReducer } from "../channels/reducers";
import { UserState, defaultKnownUsers } from "../user/state";
import { reducer as UserReducer } from "../user/reducers";
import { Stream } from "xstream";

const rootReducer = combineReducers({
  accounts: AccountReducers,
  counter,
  routing: routing as Reducer<any>,
  channels: ChannelReducer as Reducer<any>,
  users: UserReducer
});

export interface Sources {
  readonly ACTION: Stream<any>;
  readonly HTTP: HTTPSource;
}

export interface Sinks {
  readonly ACTION: Stream<any>;
  readonly HTTP: Stream<RequestOptions>;
}

export function CycleMain(sources: Sources): Sinks {
  const pong$ = sources.ACTION.mapTo("pong");
  const request$: Stream<RequestOptions> = xs.of({ url: "http://google.com" });
  return {
    ACTION: pong$,
    HTTP: request$
  };
}

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
