import * as React from 'react';
import { AccountUIData } from '../common/account';

export const AccountItem = (info: AccountUIData) => {
  const icon = info.iconUrl ? (
    <img src={info.iconUrl} />
  ) : (
    <i className="fa fa-wallet" />
  );
  return <li key={info.id}> {icon} </li>;
};
