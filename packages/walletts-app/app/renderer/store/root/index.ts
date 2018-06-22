import { combineReducers, Reducer } from "redux";
import { routerReducer as routing } from "react-router-redux";
import { RequestOptions } from "@cycle/http";
import xs from "xstream";
import { reducer as AccountReducer } from "../account/reducers/account";
import { IAccountState } from "../account/state";
import { defaultAccounts } from "../account/state";
import { ChannelState, createDefaultChannels } from "../channels/state";
import { ChannelReducer } from "../channels/reducers";
import { UserState, defaultKnownUsers } from "../user/state";
import { reducer as UserReducer } from "../user/reducers";
import { Stream } from "xstream";
import { BaseSinks } from "../../utils/interfaces";
import { NodeRequest } from "blockchain-driver";

// reducers
const rootReducer = combineReducers({
  accounts: AccountReducer as Reducer<any>,
  routing: routing as Reducer<any>,
  channels: ChannelReducer as Reducer<any>,
  users: UserReducer
});

export default rootReducer;

// cycles
export function CycleMain(sources): BaseSinks {
  const pong$ = sources.ACTION.filter(a => a.type === "ping").mapTo({
    type: "pong"
  });
  const request$: Stream<RequestOptions> = xs.of({ url: "http://google.com" });

  const bitcoinRequest$ = xs.of<NodeRequest>({
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
  readonly accounts: IAccountState;
  readonly channels: ChannelState;
  readonly users: UserState;
}

export const defaultState: IState = {
  accounts: defaultAccounts,
  channels: createDefaultChannels(),
  users: defaultKnownUsers
};
