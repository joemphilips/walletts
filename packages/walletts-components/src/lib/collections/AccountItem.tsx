import * as CSS from 'csstips';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';
import { AccountUIData } from '../common/account';

export interface AccountItemProps {
  readonly info: AccountUIData;
}

const AccountItemStyle = style(CSS.content, {
  $nest: {
    '&:hover': {
      opacity: 1
    }
  },
  fontSize: 40,
  opacity: 0.8
});

export const AccountItem: React.SFC<AccountItemProps> = ({ info }) => {
  const icon = info.iconUrl ? (
    <Link to={`/account/${info.id}`}>
      <i className={`${info.iconUrl} ${AccountItemStyle}`} />
    </Link>
  ) : (
    <i className="fa fa-twitter" />
  );
  return <li>{icon}</li>;
};
