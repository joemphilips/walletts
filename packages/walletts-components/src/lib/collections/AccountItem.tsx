import * as React from 'react';
import { AccountID } from 'walletts-core';
import { AccountUIData } from '../common/account';

export interface AccountItemProps {
  readonly key: AccountID;
  readonly info: AccountUIData;
}

export const AccountItem: React.SFC<AccountItemProps> = ({ key, info }) => {
  const icon = info.iconUrl ? (
    <span> this should be icon </span>
  ) : (
    <i className="fa fa-wallet" />
  );
  return <li key={key}>{icon}</li>;
};
