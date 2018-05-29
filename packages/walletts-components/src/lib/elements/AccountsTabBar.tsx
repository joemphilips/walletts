import * as React from 'react';
// tslint:disable-next-line
import { Account } from 'walletts-core';

export interface Props {
  readonly hoge?: any;
  readonly accountsInfo: ReadonlyArray<Account>;
}

export class AccountsTabBar extends React.Component<Props> {
  public render(): React.ReactNode {
    return <div> This is WalletsTabBar !</div>;
  }
}
