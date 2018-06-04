import * as React from "react";
import { AccountUIData } from "walletts-components";
import * as TS from "typestyle";
import * as CSS from "csstips";
const ElectronWebview = require("react-electron-web-view");
console.log(ElectronWebview);

const accountDetailStyle = TS.style(CSS.flex, {
  $nest: { "& .service-webview": { height: "100vh", width: "80%" } } // specify webiview style
});

export class AccountDetail extends React.PureComponent<AccountUIData> {
  render() {
    return (
      <div className={accountDetailStyle}>
        <ElectronWebview
          className="service-webview"
          src="https://www.google.com"
          autosize
        />
      </div>
    );
  }
}
