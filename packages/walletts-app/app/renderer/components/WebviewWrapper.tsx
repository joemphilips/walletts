import * as React from "react";
const ElectronWebview = require("react-electron-web-view");

export interface Props {
  readonly url: string;
}

export class WebviewWrapper extends React.PureComponent<Props> {
  render(): JSX.Element {
    return (
      <ElectronWebview
        // style must be specified in this way since webview is wrapped
        // in another <div> tag
        style={{ flexBasis: "100%" }}
        className="service-webview"
        src={this.props.url}
        autosize
      />
    );
  }
}
