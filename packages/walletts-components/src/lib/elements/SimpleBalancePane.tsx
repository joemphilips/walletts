import * as CS from 'csstips';
import * as React from 'react';
import * as TS from 'typestyle';
import { Satoshi } from 'walletts-core';

export interface Props {
  readonly balance: Satoshi;
}

const BalancePaneStyle = TS.style(CS.flex, CS.padding(16), {
  alignSelf: 'center',
  backgroundColor: 'grey',
  border: 'solid 2px white',
  borderRadius: '12px'
});

const balanceStyle = TS.style({});
const buttonPaneStyle = TS.style(CS.horizontal, {});

const buttonStyle = TS.style(CS.flex, {
  borderRadius: '3px'
});

export const SimpleBalancePane: React.SFC<Props> = props => {
  return (
    <div className={BalancePaneStyle}>
      <div className={balanceStyle}>{props.balance.amount} Satoshi </div>
      <div className={buttonPaneStyle}>
        <button className={buttonStyle}> Send </button>
        <button className={buttonStyle}> Receive </button>
      </div>
    </div>
  );
};
