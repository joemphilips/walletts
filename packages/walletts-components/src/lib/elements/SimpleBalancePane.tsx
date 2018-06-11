import { Satoshi } from '@walletts/core';
import * as CS from 'csstips';
import * as React from 'react';
import Modal from 'react-modal';
import * as TS from 'typestyle';
import { paneBase } from '../themes';

export interface Props {
  readonly balance: Satoshi;
}
export interface State {
  readonly isModalOpen: boolean;
}

const sidebarPaneBase = TS.style(paneBase, {
  alignItems: 'center',
  justifyContent: 'center'
});

const BalancePaneStyle = TS.classes(sidebarPaneBase, TS.style(CS.flex2));

const balanceStyle = TS.style(CS.flex, {
  alignItems: 'center',
  justifyContent: 'center'
});
const buttonPaneStyle = TS.style(CS.horizontal, CS.flex, {
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto'
});

const buttonStyle = TS.style(CS.flex, {
  borderRadius: '3px'
});

const modalStyle = {
  content: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },
  overlay: {
    backgroundColor: 'papayawhip'
  }
};

const modalContentStyle = TS.style({
  color: 'black'
});

export class SimpleBalancePane extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  public render(): JSX.Element {
    return (
      <div className={BalancePaneStyle}>
        <div className={balanceStyle}>{this.props.balance.amount} Satoshi </div>
        <div className={buttonPaneStyle}>
          <button className={buttonStyle} onClick={this.openModal}>
            {' '}
            Send{' '}
          </button>
          <button className={buttonStyle}> Receive </button>
        </div>
        <Modal
          style={modalStyle}
          isOpen={this.state.isModalOpen}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <div className={modalContentStyle}> this is modal </div>
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }

  private openModal(): void {
    this.setState({ isModalOpen: true });
  }

  private closeModal(): void {
    this.setState({ isModalOpen: false });
  }
}
