import * as React from "react";
import { Switch, Route } from "react-router";
import { App } from "./containers/App";
import HomePage from "./containers/HomePage";
import { AccountComponent } from "./containers/AccountPage";

export default () => (
  <App>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/account" component={AccountComponent} />
      <Route path="/account/:id" component={AccountComponent} />
    </Switch>
  </App>
);
