import * as React from "react";
import { AccountUIData } from "walletts-components";
import * as TS from "typestyle";
import * as CSS from "csstips";
import { AccountRight } from "./AccountRightSidebar";
import { ServiceWebview } from "../containers/ServiceWebview";

const accountDetailStyle = TS.style(CSS.horizontal, {
  $nest: { "& .service-webview": { height: "100vh", width: "80%" } } // specify webiview style
});

export class AccountDetail extends React.Component<AccountUIData> {
  render() {
    return (
      <div className={accountDetailStyle}>
        <ServiceWebview {...this.props} />
        <AccountRight {...this.props}> </AccountRight>
      </div>
    );
  }
}
