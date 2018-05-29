import * as React from 'react';
import * as SEM from 'semantic-ui-react';

export interface SidebarProps extends SEM.SidebarProps {
  readonly item?: any;
}
export class Sidebar extends React.PureComponent<SidebarProps> {
  public render(): React.ReactNode {
    return <SEM.Sidebar {...this.props} />;
  }
}
