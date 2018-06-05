import * as React from "react";
import { AccountUIData, SimpleBalancePane } from "walletts-components";
import * as TS from "typestyle";
import * as CS from "csstips";

const accountsRightStyle = TS.style(
  CS.vertical,
  CS.verticallySpaced(8),
  CS.content,
  {
    width: "16%",
    borderLeft: "solid 2px white",
    backgroundColor: "white"
  }
);

export const AccountRight: React.SFC<AccountUIData> = props => {
  return (
    <div className={accountsRightStyle}>
      <SimpleBalancePane balance={props.balance}> </SimpleBalancePane>
    </div>
  );
};
