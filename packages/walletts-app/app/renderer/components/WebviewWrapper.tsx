import * as React from "react";
import { createStyles, WithStyles, withStyles } from "@material-ui/core";
const ElectronWebview = require("react-electron-web-view");

const styles = createStyles({
  webview: {
    height: "100%"
  }
});

export interface Props extends WithStyles<typeof styles> {
  readonly url: string | null;
}

class RawWebviewWrapper extends React.PureComponent<Props> {
  render(): JSX.Element {
    const { url, classes } = this.props;
    return url ? (
      <ElectronWebview
        // style must be specified in this way since webview is wrapped
        // in another <div> tag
        style={{ flexBasis: "100%", height: "100%" }}
        className={classes.webview}
        src={url}
        autosize
      />
    ) : (
      <div> not showing webview</div>
    );
  }
}

export const WebviewWrapper = withStyles(styles)(RawWebviewWrapper);
