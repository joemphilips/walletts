import * as React from "react";
import { IAccountState } from "../store/account/state";
import { AccountDetail } from "./AccountDetail";
import { AccountUIData, UserUIData } from "walletts-components";
import { UserID, AccountID } from "walletts-core";
import { ChannelState } from "../store/channels/state";

export interface Props extends IAccountState {
  readonly match: any;
  readonly location: any;
  readonly history: any;
  readonly accounts: Record<AccountID, AccountUIData>;
  readonly knownUsers: Record<UserID, UserUIData>;
  readonly knownChannels: ChannelState;
}

export class AccountPage extends React.Component<Props> {
  constructor(props: Props, context: any) {
    super(props, context);
  }
  render() {
    const { id } = this.props.match.params;
    const currentAccount = this.props.accounts[id];
    console.log(`going to pass knownUsers to AccountDetail`);
    console.log(this.props);

    if (Object.keys(currentAccount.owners).length <= 1) {
      return (
        <AccountDetail
          account={currentAccount}
          knownUsers={this.props.knownUsers}
          knownChannels={this.props.knownChannels}
        >
          {" "}
          showing account info {id}{" "}
        </AccountDetail>
      );
    } else {
      return <div> showing community account info {id} </div>;
    }
  }
}
