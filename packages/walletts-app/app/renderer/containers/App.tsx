import * as React from "react";
import Sidebar from "./Sidebar";
import * as typestyle from "typestyle";
import * as CSS from "csstips";
import { connect } from "react-redux";
import { IState } from "../store";
const appStyle = typestyle.style(CSS.flexRoot);

export interface AppProps extends IState {}
const App: React.StatelessComponent<AppProps> = props => {
  console.log(`app props were`, props);
  return (
    <div className={appStyle}>
      <Sidebar accounts={props.accounts.accounts} vertical inverted />
      <div>{props.children}</div>
    </div>
  );
};
const mapStateToProps = (s: IState): AppProps => {
  console.log(s.accounts);
  return {
    accounts: s.accounts,
    counter: s.counter
  };
};
export default connect(mapStateToProps)(App);
