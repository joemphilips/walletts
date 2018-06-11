import * as React from "react";
import { AccountUIData, Channel, ChannelID } from "@walletts/components";
import * as TS from "typestyle";
import { WebviewWrapper } from "./WebviewWrapper";
import * as CS from "csstips";

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

export type Props = {
  account: AccountUIData;
  allChannel: Record<ChannelID, Channel>;
};

export const ServiceWebview: React.SFC<Props> = props => {
  const channelList = props.account.integratedChannels.map((c: ChannelID) => {
    const channelIcon =
      props.allChannel && props.allChannel[c] ? (
        <li className={channelLiStyle} key={props.allChannel[c].id}>
          <span> {props.allChannel[c].name}</span>
          <img className={svgIconStyle} src={props.allChannel[c].iconSVG} />
        </li>
      ) : null;
    return channelIcon;
  });

  const webviewURL = props.allChannel[props.account.visibleChannel];

  return (
    <div className={serviceWebViewStyle}>
      <div className={accountsSidebarStyle}>
        <ul className={channelUlStyle}> {channelList} </ul>
      </div>
      <WebviewWrapper url={webviewURL.url}> </WebviewWrapper>
    </div>
  );
};
