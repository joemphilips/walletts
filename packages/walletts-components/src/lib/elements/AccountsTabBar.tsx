import * as React from 'react';
// tslint:disable-next-line
import { Account } from 'walletts-core';

export interface Props {
  readonly accountsInfo: ReadonlyArray<Account>;
}

export class AccountsTabBar extends React.PureComponent<Props> {
  public render(): React.ReactNode {
    const { accountsInfo } = this.props;

    const aList = accountsInfo ? (
      accountsInfo.map((a: Account) => <li key={a.id}> hoge </li>)
    ) : (
      <li> default Accounts Info</li>
    );
    return <ul> {aList} </ul>;
  }
}
