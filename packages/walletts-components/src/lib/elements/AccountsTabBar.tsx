import * as CS from 'csstips';
import * as React from 'react';
import { style } from 'typestyle';
import { AccountID } from 'walletts-core';
import { AccountItem } from '../collections/AccountItem';
import { AccountUIData } from '../common/account';

export interface ValueProps {
  readonly accountsInfo: Record<AccountID, AccountUIData>;
}

export type Props = ValueProps;

const AccountsTabBarStyle = style(CS.flex, CS.vertical, {
  $nest: { '&:hover': { opacity: 0.98 } },
  listStyleType: 'none'
});

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
    return (
      <ul
        className={`${AccountsTabBarStyle} fa-ul`}
        style={{ listStyleType: 'none' }}
      >
        {aList}
      </ul>
    );
  }
}
