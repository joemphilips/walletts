import * as React from 'react';
import { AccountUIData } from '../common/account';

export interface AccountItemProps {
  readonly info: AccountUIData;
}

export const AccountItem: React.SFC<AccountItemProps> = ({ info }) => {
  const icon = info.iconUrl ? (
    <i className="fa fa-google-wallet" />
  ) : (
    <i className="fa fa-twitter" />
  );
  return <li>{icon}</li>;
};
