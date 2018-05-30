import * as React from "react";
import Sidebar from "./Sidebar";
import * as typestyle from "typestyle";
import * as CSS from "csstips";
import { connect } from "react-redux";
import { IState } from "../reducers";
const appStyle = typestyle.style(CSS.flexRoot);

export interface AppProps extends IState {}
class App extends React.Component<AppProps> {
  render() {
    return (
      <div className={appStyle}>
        <Sidebar accountsInfo={this.props.accountsInfo} vertical inverted />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default connect((s: IState): AppProps => {
  return {
    accountsInfo: s.accountsInfo,
    counter: s.counter
  };
})(App);
