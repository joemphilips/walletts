import { div, DOMSource, h, VNode } from "@cycle/dom";
import { StateSource } from "cycle-onionify";
import xs, { Stream } from "xstream";
import { MyWalletCoin } from "../../primitives/wallet-coin";
import { BaseSinks, BaseSources } from "../../interfaces";
import { HistoryAction } from "cyclic-router";

export interface Sources extends BaseSources {
  readonly onion: StateSource<State>;
}

export interface Sinks extends BaseSinks {
  readonly onion: Stream<Reducer>;
}

export interface State {
  readonly txs: ReadonlyArray<{
    readonly [key: string]: {
      readonly coins: ReadonlyArray<MyWalletCoin>;
      readonly shouldShow: boolean;
    };
  }>;
}

export const defaultState: State = {
  txs: [
    { txno1: { coins: [], shouldShow: false } },
    { txno2: { coins: [], shouldShow: true } }
  ]
};

export type Reducer = (prev: State) => State | null;

export const WalletDetail = ({ DOM, onion }: Sources): Sinks => {
  const action$: Stream<Reducer> = intent(DOM);

  const routes$ = DOM.select(".wallet-detail-container")
    .events("click")
    // tslint:disable-next-line:no-console
    .debug(x => console.log("going to navigate to /landing-page . received"))
    .mapTo(`/landing-page`);

  const vdom$ = view(onion.state$);
  return {
    DOM: vdom$,
    onion: action$.debug("this is debug message from Reducer stream"),
    router: routes$ as Stream<HistoryAction>
  };
};

export const intent = (DOM: DOMSource): Stream<Reducer> => {
  const init$ = xs.of<Reducer>(
    prevState => (prevState === undefined ? defaultState : prevState)
  );

  const hoverOnTx$: Stream<Reducer> = DOM.select('[data-action="navigate"]')
    .events("click")
    // tslint:disable-next-line:no-console
    .debug(x => console.log(`mouseover on ${x}`))
    .map(x => (x.srcElement ? x.srcElement.id : null))
    .debug()
    .map<Reducer>(id => state => ({ ...state }));

  const unhoverOnTx$: Stream<Reducer> = DOM.select(".tx")
    .events("mouseout")
    .map(x => (x.srcElement ? x.srcElement.id : null))
    .map<Reducer>(id => (state: State) => ({
      ...state
    }));

  return xs.merge(init$, hoverOnTx$, unhoverOnTx$);
};

export const view = (state$: Stream<State>): Stream<VNode> => {
  state$.debug("rendering");
  return state$.map(s =>
    div(".wallet-detail-container", [
      h("input.navigate-button", {
        props: { type: "button", value: "go to landing page" },
        dataset: { action: "navigate" }
      }),
      div(
        ".wallet-detail",
        Object.keys(s.txs).map(txid => div(`#${txid}`, `this is tx ${txid}`))
      )
    ])
  );
};
