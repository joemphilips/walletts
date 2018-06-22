import * as React from "react";
import {
  AccountUIData,
  UserUIData,
  Channel,
  ChannelID
} from "@walletts/components";
import { AccountRight } from "./AccountRightSidebar";
import { ChannelsSidebar } from "./ChannelsSidebar";
import { UserID, AccountID } from "@walletts/core";
import { ChannelState } from "../store/channels/state";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
import { WebviewWrapper } from "@walletts/walletts-app/app/renderer/components/WebviewWrapper";

const styles = createStyles({
  root: {
    display: "flex",
    width: "100%",
    flexDirection: "row"
  },
  sidebar: {
    display: "flex",
    flex: 0,
    height: "100vh",
    width: "16%",
    border: "solid 1px grey"
  },
  webview: {
    display: "flex",
    flex: 1,
    height: "100vh",
    border: "solid 1px grey"
  },
  rightSidebar: {
    flex: 0,
    display: "flex",
    height: "100vh",
    width: "30%",
    border: "solid 1px grey"
  }
});

export interface Props extends WithStyles<typeof styles> {
  id: AccountID;
  account: AccountUIData;
  knownUsers: Record<UserID, UserUIData>;
  knownChannels: ChannelState;
}

export interface State {
  activeChannel?: Channel;
}

class RawAccountDetail extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {};
    this.onChannelClick.bind(this);
  }
  onChannelClick(id: ChannelID) {
    const channel = this.props.knownChannels[id];
    this.setState({ activeChannel: channel });
  }

  render() {
    const ownersInfo: UserUIData[] = this.props.account.owners.map(
      id => this.props.knownUsers[id]
    );
    const { classes, account, knownChannels } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.sidebar}>
          <ChannelsSidebar
            account={account}
            allChannel={knownChannels}
            onChannelClick={this.onChannelClick}
          />
        </div>
        <div className={classes.webview}>
          <WebviewWrapper
            url={this.state.activeChannel ? this.state.activeChannel.url : null}
          />
        </div>
        <div className={classes.rightSidebar}>
          <AccountRight account={account} owners={ownersInfo} />
        </div>
      </div>
    );
  }
}

export const AccountDetail = withStyles(styles)(RawAccountDetail);
