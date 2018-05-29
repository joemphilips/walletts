import * as React from 'react';

export interface Props {
  readonly hoge?: any;
}

export class WalletsTabBar extends React.Component<Props> {
  public render(): React.ReactNode {
    return <div> This is WalletsTabBar !</div>;
  }
}
