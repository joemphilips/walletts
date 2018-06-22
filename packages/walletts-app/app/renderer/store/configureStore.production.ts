import { createStore, applyMiddleware, Reducer } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "react-router-redux";
import rootReducer, { CycleMain } from "./root";

// redux-cycles realted stuff
import { createCycleMiddleware } from "redux-cycles";
import { makeHTTPDriver } from "@cycle/http";
import { run } from "@cycle/run";
import {
  makeTrustedBcoinNodeDriver,
  makeTrustedBcoinWalletDriver
} from "blockchain-driver";
import { makeGraphQLDriver } from "apollo-driver";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
const Config = require("../../config");

const history = createBrowserHistory();
const router = routerMiddleware(history);
const customApolloLink = ApolloLink.from([
  new HttpLink(Config.graphqlEndpointProd)
]);

// redux-cycles realted stuff
const cycleMiddleware = createCycleMiddleware();
const { makeActionDriver } = cycleMiddleware;
run(CycleMain, {
  ACTION: makeActionDriver(),
  Blockchain: makeTrustedBcoinNodeDriver(Config.bcoinNodeURL),
  Wallet: makeTrustedBcoinWalletDriver(Config.bcoinWalletURL),
  HTTP: makeHTTPDriver(),
  Apollo: makeGraphQLDriver({ customApolloLink })
});

const enhancer = applyMiddleware(router, cycleMiddleware);
export = {
  history,
  configureStore(initialState: Object | void) {
    return createStore(rootReducer as Reducer<any>, initialState, enhancer);
  }
};
