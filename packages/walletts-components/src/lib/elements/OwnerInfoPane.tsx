import * as React from 'react';
import { UserUIData } from '../..';

export interface Props {
  readonly users: ReadonlyArray<UserUIData>;
}

export const OwnerInfoPane: React.SFC<Props> = props => {
  return <div> ownerinfoPane </div>;
};
