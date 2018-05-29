import * as React from 'react';
import * as SEM from 'semantic-ui-react';
// tslint:disable-next-line
import { Account } from 'walletts-core';
import { AccountsTabBar } from '../elements';

export interface SidebarProps extends SEM.SidebarProps {
  readonly item?: any;
  readonly accountsInfo: ReadonlyArray<Account>;
}
export class Sidebar extends React.PureComponent<SidebarProps> {
  public render(): React.ReactNode {
    return (
      <SEM.Sidebar direction="left" width="thin">
        <AccountsTabBar accountsInfo={this.props.accountsInfo} />
      </SEM.Sidebar>
    );
  }
}
