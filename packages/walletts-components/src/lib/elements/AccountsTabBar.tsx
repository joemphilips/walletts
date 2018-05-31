import * as React from 'react';
import { AccountID } from 'walletts-core';
import { AccountItem } from '../collections/AccountItem';
import { AccountUIData } from '../common/account';

export interface Props {
  readonly accountsInfo: Record<AccountID, AccountUIData>;
}

export class AccountsTabBar extends React.PureComponent<Props> {
  public render(): React.ReactNode {
    const { accountsInfo } = this.props;

    const aList = accountsInfo ? (
      Object.entries(accountsInfo).map(([id, a]) => (
        <AccountItem key={id} info={a} />
      ))
    ) : (
      <li key={'default'}> default Accounts Info</li>
    );
    return <ul> {aList} </ul>;
  }
}
