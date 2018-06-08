import { combineReducers, Reducer } from "redux";
import { routerReducer as routing } from "react-router-redux";
import { RequestOptions } from "@cycle/http";
import xs from "xstream";
import counter, { TState as TCounterState } from "../counter/index";
import { reducer as AccountReducer } from "../account/reducers/account";
import { IAccountState } from "../account/state";
import { defaultAccounts } from "../account/state";
import { ChannelState, createDefaultChannels } from "../channels/state";
import { ChannelReducer } from "../channels/reducers";
import { UserState, defaultKnownUsers } from "../user/state";
import { reducer as UserReducer } from "../user/reducers";
import { Stream } from "xstream";
import { BaseSinks, BaseSources } from "../../utils/interfaces";
import { BitcoindRPCRequest } from "blockchain-driver";

// reducers
const rootReducer = combineReducers({
  accounts: AccountReducer as Reducer<any>,
  counter,
  routing: routing as Reducer<any>,
  channels: ChannelReducer as Reducer<any>,
  users: UserReducer
});

export default rootReducer;

// cycles
export interface Sinks extends BaseSinks {
  readonly ACTION: Stream<any>;
  readonly HTTP: Stream<RequestOptions>;
  readonly Blockchain: Stream<BitcoindRPCRequest>;
}
export function CycleMain(sources: BaseSources): Sinks {
  const pong$ = sources.ACTION.filter(a => a.type === "ping").mapTo({
    type: "pong"
  });
  const request$: Stream<RequestOptions> = xs.of({ url: "http://google.com" });

  const bitcoinRequest$ = xs.of<BitcoindRPCRequest>({
    method: "getBlockchainInfo"
  });
  return {
    ACTION: pong$,
    HTTP: request$,
    Blockchain: bitcoinRequest$
  };
}

// states
export interface IState {
  readonly counter: TCounterState;
  readonly accounts: IAccountState;
  readonly channels: ChannelState;
  readonly users: UserState;
}

export const defaultState: IState = {
  counter: 0,
  accounts: defaultAccounts,
  channels: createDefaultChannels(),
  users: defaultKnownUsers
};

console.log(`defaultState is`);
console.log(defaultState);
