import * as CS from 'csstips';
import * as React from 'react';
import * as TS from 'typestyle';
import { Satoshi } from 'walletts-core';
import { paneBase } from '../themes';

export interface Props {
  readonly balance: Satoshi;
}

const BalancePaneStyle = TS.style(paneBase, CS.flex2, {
  alignSelf: 'center'
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
