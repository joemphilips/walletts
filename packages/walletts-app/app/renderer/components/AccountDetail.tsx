import * as React from "react";
import { AccountUIData } from "walletts-components";

export class AccountDetail extends React.PureComponent<AccountUIData> {
  render() {
    return (
      <div>
        {this.props.children}
        <h1>イェーイ</h1>
        <webview src="http://qiita.com" autosize />
      </div>
    );
  }
}
