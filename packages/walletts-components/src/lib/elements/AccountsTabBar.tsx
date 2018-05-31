import * as React from 'react';
import { style } from 'typestyle';
import { AccountID } from 'walletts-core';
import { AccountItem } from '../collections/AccountItem';
import { AccountUIData } from '../common/account';

export interface ValueProps {
  readonly accountsInfo: Record<AccountID, AccountUIData>;
}

export interface HandlerProps {
  readonly onclick: () => any;
}

export type Props = ValueProps & HandlerProps;

const AccountsTabBarStyle = style({ $nest: { '&:hover': { opacity: 0.98 } } });

export class AccountsTabBar extends React.PureComponent<Props> {
  public render(): React.ReactNode {
    const { accountsInfo, onclick } = this.props;

    const aList = accountsInfo ? (
      Object.entries(accountsInfo).map(([id, a]) => (
        <AccountItem key={id} info={a} onClick={() => onclick(id)} />
      ))
    ) : (
      <li key={'default'}> default Accounts Info</li>
    );
    return <ul className={AccountsTabBarStyle}> {aList} </ul>;
  }
}
