import * as React from "react";
import {
  AccountUIData,
  SimpleBalancePane,
  OwnerInfoPane,
  UserUIData
} from "@walletts/components";
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

export interface Props {
  readonly account: AccountUIData;
  readonly owners: ReadonlyArray<UserUIData>;
}

export const AccountRight: React.SFC<Props> = props => {
  return (
    <div className={accountsRightStyle}>
      <SimpleBalancePane balance={props.account.balance}> </SimpleBalancePane>
      <OwnerInfoPane admins={props.owners}> </OwnerInfoPane>
    </div>
  );
};
