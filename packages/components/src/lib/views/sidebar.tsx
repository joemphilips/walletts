import { AccountID } from '@walletts/core';
import * as CSS from 'csstips';
import * as React from 'react';
import * as ts from 'typestyle';
// tslint:disable-next-line
import { AccountUIData } from '../common/account';
import { AccountsTabBar } from '../organisms';

export interface ValueProps {
  readonly item?: any;
  readonly accounts: Record<AccountID, AccountUIData>;
}
export interface HandlerProps {
  // tslint:disable-next-line:no-mixed-interface
  readonly [key: string]: any;
}

export type SidebarProps = ValueProps & HandlerProps;
const sidebarStyle = ts.style(CSS.vertical, CSS.centerJustified);

export class Sidebar extends React.Component<SidebarProps> {
  constructor(props) {
    super(props);
  }
  public render(): React.ReactNode {
    return (
      <div className={sidebarStyle}>
        <AccountsTabBar
          accountsInfo={this.props.accounts}
          onclick={this.props.onclick}
        />
      </div>
    );
  }
}
