import * as React from "react";
import { AccountUIData } from "walletts-components";
import * as TS from "typestyle";
import * as CS from "csstips";

const accountsSidebarStyle = TS.style(CS.vertical, CS.flex, {
  width: "10%"
});

export const AccountSidebar: React.SFC<AccountUIData> = props => {
  return <div className={accountsSidebarStyle}>{props.integratedChannels}</div>;
};
