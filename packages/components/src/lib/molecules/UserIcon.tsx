import * as React from 'react';
// tslint:disable

export interface Props {
  readonly key: string;
  readonly name: string;
}

export class UserIcon extends React.PureComponent<Props> {
  render(): JSX.Element {
    return <li> {this.props.name} </li>;
  }
}
