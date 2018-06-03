import * as React from "react";
import { IAccountState } from "../store/account/store";
import { AccountDetail } from "./AccountDetail";

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
    const props = this.props.accounts[id];
    if (Object.keys(props.owners).length <= 1) {
      return (
        <AccountDetail {...props}> showing account info {id} </AccountDetail>
      );
    } else {
      return <div> showing community account info {id} </div>;
    }
  }
}
