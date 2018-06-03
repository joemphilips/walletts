import * as React from "react";
import { IAccountState } from "../store/account/store";

export interface Props extends IAccountState {
  readonly match: any;
  readonly location: any;
  readonly history: any;
}

export class AccountPage extends React.Component<Props> {
  constructor(props: Props, context: any) {
    super(props, context);
  }
  render() {
    const { id } = this.props.match.params;
    const { owners } = this.props.accounts[id];
    if (Object.keys(owners).length <= 1) {
      return <div> showing account info {id} </div>;
    } else {
      return <div> showing community account info {id} </div>;
    }
  }
}
