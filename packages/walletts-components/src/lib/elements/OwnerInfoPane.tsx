import * as CS from 'csstips';
import * as React from 'react';
import * as TS from 'typestyle';
import { UserUIData } from '../..';
import { UserIcon } from '../collections/UserIcon';
import { paneBase } from '../themes';

export interface Props {
  readonly admins: ReadonlyArray<UserUIData>;
}

const OwnerInfoPaneStyle = TS.style(CS.flex5, paneBase, {});

export const OwnerInfoPane: React.SFC<Props> = props => {
  const ownerIcons = props.admins.map(admin => (
    <UserIcon key={admin.id} name={admin.name} />
  ));
  return (
    <div className={OwnerInfoPaneStyle}>
      <h3>Administrators</h3>
      {ownerIcons}
    </div>
  );
};
