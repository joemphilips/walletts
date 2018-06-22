import * as React from "react";
import { AccountUIData, Channel, ChannelID } from "@walletts/components";
import * as Icons from "@material-ui/icons";
import {
  createStyles,
  WithStyles,
  withStyles,
  List,
  ListItem
} from "@material-ui/core";

const styles = createStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  listItem: {
    padding: "10px"
  },
  icon: {},
  iconActive: {
    backgroundColor: "blue"
  }
});

export interface Props extends WithStyles<typeof styles> {
  account: AccountUIData;
  allChannel: Record<ChannelID, Channel>;
  activeChannelID: ChannelID;
  onChannelClick: (channelID: ChannelID) => void;
}

export const RawChannelsSidebar: React.SFC<Props> = props => {
  const { classes, account, activeChannelID } = props;
  const IconsDom = account.integratedChannels.map(c => (
    <ListItem key={c} className={classes.listItem}>
      <Icons.Home
        style={{ fontSize: 36 }}
        onClick={() => props.onChannelClick(c)}
        className={activeChannelID === c ? classes.iconActive : classes.icon}
      />
    </ListItem>
  ));

  return <List className={classes.root}>{IconsDom}</List>;
};

export const ChannelsSidebar = withStyles(styles)(RawChannelsSidebar);
