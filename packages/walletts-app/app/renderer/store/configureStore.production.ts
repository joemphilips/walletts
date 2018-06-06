import { createStore, applyMiddleware, Reducer } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "react-router-redux";
import rootReducer, { CycleMain } from "./root";

// redux-cycles realted stuff
import { createCycleMiddleware } from "redux-cycles";
import { makeHTTPDriver } from "@cycle/http";
import { run } from "@cycle/run";

const history = createBrowserHistory();
const router = routerMiddleware(history);
const enhancer = applyMiddleware(thunk, router);

// redux-cycles realted stuff
const cycleMiddleware = createCycleMiddleware();
const { makeActionDriver } = cycleMiddleware;
run(CycleMain, {
  ACTION: makeActionDriver(),
  HTTP: makeHTTPDriver() as any
});

export = {
  history,
  configureStore(initialState: Object | void) {
    return createStore(rootReducer as Reducer<any>, initialState, enhancer);
  }
};
