import * as React from "react";
import { AccountUIData } from "walletts-components";
import * as TS from "typestyle";
import * as CSS from "csstips";
import { AccountSidebar } from "./AccountSidebar";
import { AccountRight } from "./AccountRightSidebar";
const ElectronWebview = require("react-electron-web-view");
console.log(ElectronWebview);

const accountDetailStyle = TS.style(CSS.horizontal, {
  $nest: { "& .service-webview": { height: "100vh", width: "80%" } } // specify webiview style
});

export class AccountDetail extends React.Component<AccountUIData> {
  render() {
    return (
      <div className={accountDetailStyle}>
        <AccountSidebar {...this.props}> </AccountSidebar>
        <ElectronWebview
          // must be specified in this way since webview is wrapped in another <div> tag
          style={{ flexBasis: "100%" }}
          className="service-webview"
          src="https://www.google.com"
          autosize
        />
        <AccountRight {...this.props}> </AccountRight>
      </div>
    );
  }
}
