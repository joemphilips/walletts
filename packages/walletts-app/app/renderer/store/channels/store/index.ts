import { Channel } from "walletts-components";
const slackSVG = require("../../../../../channels/slack/icon.svg");
import slackPNG from "../../../../../channels/slack/icon.png";

export const createDefaultChannels = (): ReadonlyArray<Channel> => [
  {
    id: "defaultchannelid",
    name: "slack",
    url: "https://campfirejp.slack.com/messages/C024JD5EC/",
    iconPng: slackPNG,
    iconSVG: slackSVG
  }
];

export const SUPPORTED_CHANNELS = ["slack", "messenger"];
