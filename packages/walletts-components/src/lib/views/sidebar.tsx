import * as CSS from 'csstips';
import * as React from 'react';
import * as SEM from 'semantic-ui-react';
import * as ts from 'typestyle';
import { AccountID } from 'walletts-core';
// tslint:disable-next-line
import { AccountUIData } from '../common/account';
import { AccountsTabBar } from '../elements';

export interface SidebarProps extends SEM.SidebarProps {
  readonly item?: any;
  readonly accounts: Record<AccountID, AccountUIData>;
}

const sidebarStyle = ts.style(CSS.flexRoot, CSS.vertical);

export class Sidebar extends React.PureComponent<SidebarProps> {
  public render(): React.ReactNode {
    return (
      <SEM.Sidebar className={sidebarStyle} direction="left" width="thin">
        <AccountsTabBar accountsInfo={this.props.accounts} />
      </SEM.Sidebar>
    );
  }
}
