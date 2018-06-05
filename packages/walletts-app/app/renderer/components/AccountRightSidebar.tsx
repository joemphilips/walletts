import * as React from "react";
import { AccountUIData } from "walletts-components";
import * as TS from "typestyle";
import * as CS from "csstips";

const accountsRightStyle = TS.style(CS.vertical, CS.content, {
  width: "10%"
});

export const AccountRight: React.SFC<AccountUIData> = props => {
  return <div className={accountsRightStyle}>this is right sidebar</div>;
};
