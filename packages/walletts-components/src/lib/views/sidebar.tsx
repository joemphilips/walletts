import * as React from 'react';
import * as SEM from 'semantic-ui-react';
import { AccountsTabBar } from '../elements';

export interface SidebarProps extends SEM.SidebarProps {
  readonly item?: any;
  readonly accountsInfo: any;
}
export class Sidebar extends React.PureComponent<SidebarProps> {
  public render(): React.ReactNode {
    return (
      <SEM.Sidebar {...this.props} direction="left" width="thin">
        <AccountsTabBar accountsInfo={this.props.accountsInfo} />
      </SEM.Sidebar>
    );
  }
}
