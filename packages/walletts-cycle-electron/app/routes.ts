import { Component } from "./interfaces";
import { Counter } from "./components/counter";
import { Speaker } from "./components/speaker";
import { main as TutorialList } from "./components/tutorials/TutorialList";
import { WalletDetail } from "./components/wallet/WalletDetail";

export interface RouteValue {
  readonly component: Component<any, any>;
  readonly scope: string;
}
export interface Routes {
  readonly [index: string]: RouteValue;
}

export const routes: Routes = {
  "/": { component: Counter, scope: "counter" },
  "/p2": { component: Speaker, scope: "speaker" },
  "/tutorial": { component: TutorialList, scope: "tutorial" },
  "/wallet": { component: WalletDetail, scope: "wallet-detail" }
};

export const initialRoute = "/";
