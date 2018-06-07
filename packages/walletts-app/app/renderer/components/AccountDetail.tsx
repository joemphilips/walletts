import * as React from "react";
import { AccountUIData, UserUIData } from "walletts-components";
import * as TS from "typestyle";
import * as CSS from "csstips";
import { AccountRight } from "./AccountRightSidebar";
import { ServiceWebview } from "./ServiceWebview";
import { UserID } from "walletts-core";
import { ChannelState } from "../store/channels/state";

const accountDetailStyle = TS.style(CSS.horizontal, {
  $nest: { "& .service-webview": { height: "100vh", width: "80%" } } // specify webiview style
});

export interface Props {
  account: AccountUIData;
  knownUsers: Record<UserID, UserUIData>;
  knownChannels: ChannelState;
}

export class AccountDetail extends React.Component<Props> {
  render() {
    const ownersInfo: UserUIData[] = this.props.account.owners.map(
      id => this.props.knownUsers[id]
    );
    return (
      <div className={accountDetailStyle}>
        <ServiceWebview
          account={this.props.account}
          allChannel={this.props.knownChannels}
        >
          {" "}
        </ServiceWebview>
        <AccountRight account={this.props.account} owners={ownersInfo}>
          {" "}
        </AccountRight>
      </div>
    );
  }
}
