import * as React from "react";
import { AccountUIData, UserUIData } from "@walletts/components";
import {
  Grid,
  Card,
  createStyles,
  WithStyles,
  withStyles
} from "@material-ui/core";

const styles = createStyles({
  root: {
    height: "100vh"
  },
  cardItem: {
    height: "40%",
    padding: 6
  }
});

export interface Props extends WithStyles<typeof styles> {
  readonly account: AccountUIData;
  readonly owners: ReadonlyArray<UserUIData>;
}

const RawAccountRight: React.SFC<Props> = props => {
  const { classes } = props;
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid item className={classes.cardItem}>
        <Card style={{ height: "40%", borderRadius: 8 }}> card </Card>
      </Grid>
      {/* <SimpleBalancePane balance={props.account.balance}> </SimpleBalancePane>
        <OwnerInfoPane admins={props.owners}> </OwnerInfoPane>} */}
    </Grid>
  );
};

export const AccountRight = withStyles(styles)(RawAccountRight);
