export type ChannelID = string;

export interface Channel {
  readonly id: ChannelID;
  readonly name: string;
  readonly url: string;
  readonly iconPng: string;
  readonly iconSVG: string;
  readonly isActive: boolean;
}
