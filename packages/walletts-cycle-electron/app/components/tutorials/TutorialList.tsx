import { h, ul, VNode } from "@cycle/dom";
import { makeCollection, StateSource } from "cycle-onionify";
import xs, { Stream } from "xstream";
import { BaseSinks, BaseSources } from "../../interfaces";
import {
  main as TutorialCard,
  State as TutorialCardState
} from "./TutorialCard";
import { HistoryAction } from "cyclic-router";

export interface State {
  readonly child: ReadonlyArray<TutorialCardState>;
}
export const defaultState: State = {
  child: [
    { id: 1, onelineExplanation: "this is a defualt card", isChecked: true },
    { id: 2, onelineExplanation: "this is an another one", isChecked: false }
  ]
};

export type Reducer = (prev: State) => State | undefined;
export interface Sources extends BaseSources {
  readonly onion: StateSource<State>;
}
export interface Sinks extends BaseSinks {
  readonly onion?: Stream<Reducer>;
}
export interface Intent {
  readonly deleteCompleted$: Stream<null>;
}

export const main = (sources: Sources): Sinks => {
  const action$ = intent(sources);
  const thisReducer$ = model(action$);

  // define component for list of child. and combine its stream.
  const TutorialList = makeCollection({
    item: TutorialCard,
    itemKey: (state: TutorialCardState, index) => String(state.id),
    itemScope: key => key,
    collectSinks: instances => {
      return {
        onion: instances.pickMerge("onion"),
        DOM: instances.pickCombine("DOM").map(itemVNodes => ul(itemVNodes))
      };
    }
  });
  const childSinks = TutorialList(sources);
  const reducer$ = xs.merge<Reducer>(thisReducer$, childSinks.onion);

  // routes
  const routes$ = sources.DOM.select(".navigate-button")
    .events("click")
    .mapTo("/wallet");

  return {
    DOM: view(sources.onion.state$),
    onion: reducer$,
    router: routes$ as Stream<HistoryAction>
  };
};

const view = (state$: Stream<State>): Stream<VNode> => {
  return state$.map((s: State) =>
    h(
      ".wallet-container",
      [
        h("input.navigate-button", {
          props: { type: "button", value: "go to wallet detail" },
          dataset: { action: "navigate" }
        }),
        ul(".todo-list", [, ...s.child])
      ],
      "main container for wallet page"
    )
  );
};

const model = (action: Intent): Stream<Reducer> => {
  const initialReducer$ = xs.of<Reducer>(
    prevState => (prevState === undefined ? defaultState : prevState)
  );

  return initialReducer$;
};

const intent = ({ DOM }: Sources): Intent => {
  return {
    deleteCompleted$: DOM.select(".clear-completed")
      .events("click")
      .mapTo(null)
  };
};
