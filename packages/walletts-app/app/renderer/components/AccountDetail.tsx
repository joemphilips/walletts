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
import { Grid, createStyles, WithStyles, withStyles } from "@material-ui/core";
import { WebviewWrapper } from "@walletts/walletts-app/app/renderer/components/WebviewWrapper";

const styles = createStyles({
  root: {
    width: "100%"
  },
  item: {
    height: "100vh"
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
      <Grid container direction="row" className={classes.root}>
        <Grid item xs={1} className={classes.item}>
          <ChannelsSidebar
            account={account}
            allChannel={knownChannels}
            onChannelClick={this.onChannelClick}
          />
        </Grid>
        <Grid item xs={9} className={classes.item}>
          <WebviewWrapper
            url={this.state.activeChannel ? this.state.activeChannel.url : null}
          />
        </Grid>
        <Grid item xs={2} className={classes.item}>
          <AccountRight account={account} owners={ownersInfo} />
        </Grid>
      </Grid>
    );
  }
}

export const AccountDetail = withStyles(styles)(RawAccountDetail);
