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
  readonly onclick: (id: AccountID) => any;
}

export type SidebarProps = SidebarValueProps & SideBarHandlerProps;
const sidebarStyle = ts.style(CSS.vertical, CSS.centerJustified);

export class Sidebar extends React.PureComponent<SidebarProps> {
  constructor(props) {
    super(props);
  }
  public render(): React.ReactNode {
    // tslint:disable-next-line
    console.log('onclick in sidebar is');
    // tslint:disable-next-line
    console.log(onclick);

    return (
      <SEM.Sidebar
        {...this.props}
        className={sidebarStyle}
        direction="left"
        width="thin"
      >
        <AccountsTabBar accountsInfo={this.props.accounts} onclick={onclick} />
      </SEM.Sidebar>
    );
  }
}
