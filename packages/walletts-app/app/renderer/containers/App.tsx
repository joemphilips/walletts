import * as React from "react";
import Sidebar from "./Sidebar";
import { Grid } from "@material-ui/core";

const App: React.SFC = props => {
  return (
    <Grid container direction="row">
      <Grid item xs={1}>
        <Sidebar />
      </Grid>
      <Grid item xs={11}>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default App;
