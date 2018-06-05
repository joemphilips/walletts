import * as React from "react";
import { AccountUIData, Channel, ChannelID } from "walletts-components";
import * as TS from "typestyle";
import * as CS from "csstips";
import { IState } from "../store";
import { connect } from "react-redux";

const accountsSidebarStyle = TS.style(CS.vertical, CS.flex, {
  width: "10%",
  borderLeft: "solid 3px white",
  padding: "6px"
});

const channelIconStyle = TS.style(CS.content, {
  padding: "6px"
});

const svgIconStyle = TS.style(CS.content, {
  maxWidth: "100%",
  maxHeight: "100%"
});

export type Props = AccountUIData & { allChannel: Record<ChannelID, Channel> };

const AccountSidebarComponent: React.SFC<Props> = props => {
  const channelList = props.integratedChannels.map((c: ChannelID) => {
    const channelInfo =
      props.allChannel && props.allChannel[c] ? (
        <li key={props.allChannel[c].id}>
          <span> {props.allChannel[c].name}</span>
          <img className={svgIconStyle} src={props.allChannel[c].iconSVG} />
        </li>
      ) : null;
    return channelInfo;
  });

  return (
    <div className={accountsSidebarStyle}>
      <ul className={channelIconStyle}> {channelList} </ul>
    </div>
  );
};

function mapStateToProps(state: IState): Partial<Props> {
  return {
    allChannel: state.channels
  };
}

export const AccountSidebar = connect(mapStateToProps)(AccountSidebarComponent);
