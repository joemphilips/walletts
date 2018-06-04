import * as CSS from 'csstips';
import * as React from 'react';
import * as SEM from 'semantic-ui-react';
import * as ts from 'typestyle';
import { AccountID } from 'walletts-core';
// tslint:disable-next-line
import { AccountUIData } from '../common/account';
import { AccountsTabBar } from '../elements';

export interface SidebarValueProps extends SEM.SidebarProps {
  readonly item?: any;
  readonly accounts: Record<AccountID, AccountUIData>;
}
export interface SideBarHandlerProps {
  // tslint:disable-next-line:no-mixed-interface
  readonly [key: string]: any;
}

export type SidebarProps = SidebarValueProps & SideBarHandlerProps;
const sidebarStyle = ts.style(CSS.vertical, CSS.centerJustified);

export class Sidebar extends React.Component<SidebarProps> {
  constructor(props) {
    super(props);
  }
  public render(): React.ReactNode {
    return (
      <div className={sidebarStyle}>
        <AccountsTabBar accountsInfo={this.props.accounts} />
      </div>
    );
  }
}
