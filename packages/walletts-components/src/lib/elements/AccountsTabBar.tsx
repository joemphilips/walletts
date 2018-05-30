import * as React from 'react';
import { AccountItem } from '../collections/AccountItem';
import { AccountUIData } from '../common/account';

export interface Props {
  readonly accountsInfo: ReadonlyArray<AccountUIData>;
}

export class AccountsTabBar extends React.PureComponent<Props> {
  public render(): React.ReactNode {
    const { accountsInfo } = this.props;

    const aList = accountsInfo ? (
      accountsInfo.map((a: AccountUIData) => (
        <AccountItem {...a}> hoge </AccountItem>
      ))
    ) : (
      <li> default Accounts Info</li>
    );
    return <ul> {aList} </ul>;
  }
}
