import * as CSS from 'csstips';
import * as React from 'react';
import { style } from 'typestyle';
import { AccountUIData } from '../common/account';

export interface AccountItemProps {
  readonly info: AccountUIData;
}

const AccountItemStyle = style(CSS.content, { fontSize: 40, opacity: 1 });

export const AccountItem: React.SFC<AccountItemProps> = ({ info }) => {
  const icon = info.iconUrl ? (
    <i className={`fa fa-google-wallet fa-fw ${AccountItemStyle}`} />
  ) : (
    <i className="fa fa-twitter" />
  );
  return <li>{icon}</li>;
};
