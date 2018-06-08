import { Channel, ChannelID } from "walletts-components";
const slackSVG = require("../../../../../channels/slack/icon.svg");
const slackPNG = "../../../../../channels/slack/icon.png";

export type ChannelState = Record<ChannelID, Channel>;

export const createDefaultChannels = (): ChannelState => ({
  defaultchannelid: {
    id: "defaultchannelid",
    name: "slack",
    url: "https://campfirejp.slack.com/messages/C024JD5EC/",
    iconPng: slackPNG,
    iconSVG: slackSVG,
    isActive: true
  }
});

export const SUPPORTED_CHANNELS = ["slack", "messenger"];
