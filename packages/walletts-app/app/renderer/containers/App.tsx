import * as React from "react";
import Sidebar from "./Sidebar";
import * as typestyle from "typestyle";
import * as CSS from "csstips";
import { connect } from "react-redux";
import { IState } from "../reducers";
const appStyle = typestyle.style(CSS.flexRoot);

class App extends React.Component<any, IState> {
  render() {
    return (
      <div className={appStyle}>
        <Sidebar accountsInfo={this.props.accountsInfo} vertical inverted />
        <div>{this.props.children}</div>
      </div>
    );
  }
}

export default connect(state => state)(App);
