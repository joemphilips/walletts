import * as CS from 'csstips';
import * as CX from 'csx';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { classes, style } from 'typestyle';
import { AccountUIData } from '../common/account';

const listStyle = { listStyleType: 'none' };

export interface AccountItemProps {
  readonly info: AccountUIData;
}

const AccountItemStyleBase = style(CS.content, {
  $nest: {
    '&:hover': {
      opacity: 1
    }
  },
  fontSize: 40,
  opacity: 0.8
});

export const AccountItem: React.SFC<AccountItemProps> = ({ info }) => {
  const activeStyleDiff = info.isActive
    ? style({
        color: CX.color('rgb(249, 199, 224)').toString()
      })
    : style({ color: 'grey' });
  const iconStyle = classes(AccountItemStyleBase, activeStyleDiff);
  const icon = info.iconUrl ? (
    <Link to={`/account/${info.id}`}>
      <i className={`${info.iconUrl} ${iconStyle}`} />
    </Link>
  ) : (
    <i className="fa fa-twitter" />
  );
  return <li className={`${listStyle} fa-li`}>{icon}</li>;
};
