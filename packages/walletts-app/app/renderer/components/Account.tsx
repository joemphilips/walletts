import * as React from "react";
import { IAccountState } from "../store/account/state";
import { AccountChannel } from "./AccountChannel";
import { AccountUIData, UserUIData } from "@walletts/components";
import { UserID, AccountID } from "@walletts/core";
import { ChannelState } from "../store/channels/state";
import { AccountDetail } from "@walletts/walletts-app/app/renderer/components/AccountDetail";

export interface Props extends IAccountState {
  readonly match: any;
  readonly location: any;
  readonly history: any;
  readonly accounts: Record<AccountID, AccountUIData>;
  readonly knownUsers: Record<UserID, UserUIData>;
  readonly knownChannels: ChannelState;
}

export class AccountChannelWrapper extends React.Component<Props> {
  constructor(props: Props, context: any) {
    super(props, context);
  }
  render() {
    const { id } = this.props.match.params;
    const currentAccount = this.props.accounts[id];

    if (Object.keys(currentAccount.owners).length > 1) {
      return (
        <AccountChannel
          id={id}
          account={currentAccount}
          knownUsers={this.props.knownUsers}
          knownChannels={this.props.knownChannels}
        >
          showing account info {id}
        </AccountChannel>
      );
    } else {
      return <AccountDetail />;
    }
  }
}
