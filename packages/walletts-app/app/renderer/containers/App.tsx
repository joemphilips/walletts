import * as React from "react";
import Sidebar from "./Sidebar";
import { appInit } from "../store/common/actions";
import { IState } from "@walletts/walletts-app/app/renderer/store";
import { connect } from "react-redux";
import { Dispatch } from "redux";

interface Props {
  readonly appInit: () => any;
}

class AppComponent extends React.Component<Props> {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.appInit();
  }

  render() {
    return (
      <div style={{ display: "flex" }}>
        <Sidebar />
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => state;
const mapDispatchToProps = (dispatch: Dispatch<IState>) => ({
  appInit: () => dispatch(appInit())
});

export const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppComponent);
