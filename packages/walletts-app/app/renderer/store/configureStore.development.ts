import { createStore, applyMiddleware, compose } from "redux";
import { createHashHistory } from "history";
import { routerMiddleware, push } from "react-router-redux";
import { Reducer } from "redux";
import { createLogger } from "redux-logger";
import rootReducer, { CycleMain } from "./root";
import { run } from "@cycle/run";
import { createCycleMiddleware } from "redux-cycles";

import * as counterActions from "../actions/counter";
import { makeHTTPDriver } from "@cycle/http";

declare const window: Window & {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?(a: any): void;
};

declare const module: NodeModule & {
  hot?: {
    accept(...args: any[]): any;
  };
};

const actionCreators = Object.assign({}, counterActions, { push });

const logger = (<any>createLogger)({
  level: "info",
  collapsed: true
});

const history = createHashHistory();
const router = routerMiddleware(history);

// redux-cycles realted stuff
const cycleMiddleware = createCycleMiddleware();
const { makeActionDriver } = cycleMiddleware;

run(CycleMain, {
  ACTION: makeActionDriver(),
  HTTP: makeHTTPDriver() as any
});

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
/* eslint-disable no-underscore-dangle */
const composeEnhancers: typeof compose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
      actionCreators
    }) as any)
  : compose;
/* eslint-enable no-underscore-dangle */
const enhancer = composeEnhancers(
  applyMiddleware(router, logger, cycleMiddleware)
);

export = {
  history,
  configureStore(initialState: Object | void) {
    const store = createStore(
      rootReducer as Reducer<any>,
      initialState,
      enhancer
    );

    if (module.hot) {
      module.hot.accept(
        "./root",
        () => store.replaceReducer(require("./root")) // eslint-disable-line global-require
      );
    }

    return store;
  }
};
