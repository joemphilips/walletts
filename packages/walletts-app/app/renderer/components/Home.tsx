import * as React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";

const styles = createStyles({ h2: { fontSize: "5rem" } });

interface Props extends WithStyles<typeof styles> {}

class RawHome extends React.Component<Props> {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h2 className={classes.h2}>Home</h2>
      </div>
    );
  }
}

export const Home = withStyles(styles)(RawHome);
