import * as React from "react";
import { AccountUIData, Channel, ChannelID } from "@walletts/components";
import * as Icons from "@material-ui/icons";
import { Grid } from "@material-ui/core";

export type Props = {
  account: AccountUIData;
  allChannel: Record<ChannelID, Channel>;
  onChannelClick: (channelID) => void;
};

export const ChannelsSidebar: React.SFC<Props> = props => {
  const IconsDom = props.account.integratedChannels.map(c => (
    <Grid item key={c}>
      <Icons.Home onClick={() => props.onChannelClick(c)} />
    </Grid>
  ));

  return (
    <Grid container direction="column">
      {IconsDom}
    </Grid>
  );
};
