import * as React from "react";
import { Switch, Route } from "react-router";
import App from "./containers/App";
import HomePage from "./containers/HomePage";
import CounterPage from "./containers/CounterPage";
import { AccountPage } from "./containers/AccountPage";

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/counter" component={CounterPage} />
      <Route exact path="/account" component={AccountPage} />
      <Route path="/account/:id" component={AccountPage} />
    </Switch>
  </App>
);
