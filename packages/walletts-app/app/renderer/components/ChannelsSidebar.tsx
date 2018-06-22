import * as React from "react";
import { AccountUIData, Channel, ChannelID } from "@walletts/components";
import * as Icons from "@material-ui/icons";
import { Grid, createStyles, WithStyles, withStyles } from "@material-ui/core";

const styles = createStyles({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  icon: {
    margin: "10px"
  }
});

export interface Props extends WithStyles<typeof styles> {
  account: AccountUIData;
  allChannel: Record<ChannelID, Channel>;
  onChannelClick: (channelID) => void;
}

export const RawChannelsSidebar: React.SFC<Props> = props => {
  const { classes, account } = props;
  const IconsDom = account.integratedChannels.map(c => (
    <Grid item key={c}>
      <Icons.Home
        style={{ fontSize: 36 }}
        onClick={() => props.onChannelClick(c)}
        className={classes.icon}
      />
    </Grid>
  ));

  return (
    <Grid container direction="column" className={classes.root}>
      {IconsDom}
    </Grid>
  );
};

export const ChannelsSidebar = withStyles(styles)(RawChannelsSidebar);
