import * as React from "react";
import { bindActionCreators } from "redux";
import { connect, Dispatch } from "react-redux";
import { Counter, IProps } from "../components/Counter";
import * as CounterActions from "../actions/counter";
import { IState } from "../store";

function mapStateToProps(state: IState): Partial<IProps> {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch: Dispatch): Partial<IProps> {
  return bindActionCreators(CounterActions as any, dispatch);
}

export default (connect(mapStateToProps, mapDispatchToProps)(
  Counter
) as any) as React.StatelessComponent<IProps>;
