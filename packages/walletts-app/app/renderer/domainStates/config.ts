import { SupportedBchType } from "../../../../blockchain-driver";

export interface ConfigDomainState {
  readonly blockchain: BlockchainConfig;
  pin: ReadonlyArray<number>;
}

interface BlockchainConfig {
  ip: string;
  port: number;
  username: string;
  password: string;
  type: SupportedBchType;
}

export const defaultConfigState: ConfigDomainState = {
  blockchain: {
    ip: "localhost",
    port: 18332,
    username: "foo",
    password: "bar",
    type: SupportedBchType.bitcoinCore
  },
  pin: [0, 0, 0, 0]
};
