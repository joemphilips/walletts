import * as React from "react";
import { AccountUIData, Channel, ChannelID } from "walletts-components";
import * as TS from "typestyle";
import { WebviewWrapper } from "../components/WebviewWrapper";
import * as CS from "csstips";
import { IState } from "../store";
import { connect } from "react-redux";

const accountsSidebarStyle = TS.style(CS.vertical, CS.flex, {
  width: "10%",
  borderLeft: "solid 3px white",
  padding: "6px"
});

const serviceWebViewStyle = TS.style(CS.horizontal);

const channelLiStyle = TS.style(CS.content, CS.center, {
  padding: "6px"
});

const channelUlStyle = TS.style({
  listStyleType: "none",
  padding: "0"
});

const svgIconStyle = TS.style(CS.content, {
  maxWidth: "100%",
  maxHeight: "100%"
});

export type Props = AccountUIData & { allChannel: Record<ChannelID, Channel> };

const ServiceWebviewComponent: React.SFC<Props> = props => {
  const channelList = props.integratedChannels.map((c: ChannelID) => {
    const channelIcon =
      props.allChannel && props.allChannel[c] ? (
        <li className={channelLiStyle} key={props.allChannel[c].id}>
          <span> {props.allChannel[c].name}</span>
          <img className={svgIconStyle} src={props.allChannel[c].iconSVG} />
        </li>
      ) : null;
    return channelIcon;
  });

  const webviewURL = props.allChannel[props.visibleChannel];

  return (
    <div className={serviceWebViewStyle}>
      <div className={accountsSidebarStyle}>
        <ul className={channelUlStyle}> {channelList} </ul>
      </div>
      <WebviewWrapper url={webviewURL.url}> </WebviewWrapper>
    </div>
  );
};

function mapStateToProps(state: IState): Partial<Props> {
  return {
    allChannel: state.channels
  };
}

export const ServiceWebview = connect(mapStateToProps)(ServiceWebviewComponent);
