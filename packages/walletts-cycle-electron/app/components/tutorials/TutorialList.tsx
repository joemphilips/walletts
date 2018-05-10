import { ul, VNode, div, button } from "@cycle/dom";
import { makeCollection, StateSource } from "cycle-onionify";
import xs, { Stream } from "xstream";
import { BaseSinks, BaseSources } from "../../interfaces";
import {
  main as TutorialCard,
  State as TutorialCardState,
  defaultState as TutorialCardDefaultState
} from "./TutorialCard";
import { HistoryAction } from "cyclic-router";
import isolate from "@cycle/isolate";

// ----- MISCS ------
export type TutorialCardStateWithKey = TutorialCardState & { key: string };
export interface State {
  readonly child: ReadonlyArray<TutorialCardState>;
}
export const defaultState: State = {
  child: [
    TutorialCardDefaultState,
    { id: 1, onelineExplanation: "this is a defualt card", isChecked: true },
    { id: 2, onelineExplanation: "this is an another one", isChecked: false }
  ]
};

export type Reducer = (prev?: State) => State;
export interface Sources extends BaseSources {
  readonly onion: StateSource<State>;
}
export interface Sinks extends BaseSinks {
  readonly onion?: Stream<Reducer>;
}
export interface Actions {
  readonly deleteCompleted$: Stream<null>;
}

// define component for list of child. and combine its stream.
const TutorialList = makeCollection({
  item: TutorialCard,
  itemKey: (state: TutorialCardState, index) => String(state.id),
  itemScope: key => key,
  collectSinks: instances => {
    return {
      onion: instances.pickMerge("onion"),
      DOM: instances
        .pickCombine("DOM")
        .map((itemVNodes: ReadonlyArray<VNode>) => ul(itemVNodes))
    };
  }
});

// ----- MAIN ------
export const main = (sources: Sources): Sinks => {
  const action$ = intent(sources);
  const thisReducer$ = model(action$);

  const childSinks = isolate(TutorialList, { onion: "child" })(sources);
  const reducer$ = xs.merge<Reducer>(thisReducer$, childSinks.onion);

  // routes
  const routes$ = sources.DOM.select('[data-action="navigate"]')
    .events("click")
    .mapTo("/wallet");

  return {
    DOM: view(childSinks.DOM),
    onion: reducer$,
    router: routes$ as Stream<HistoryAction>
  };
};

// ---- MVI -----
const model = (action$: Actions): Stream<Reducer> => {
  const initialReducer$ = xs.of<Reducer>(
    (prev?: State) => (prev ? prev : defaultState)
  );

  return initialReducer$;
};

const view = (child$: Stream<VNode>): Stream<VNode> => {
  return child$
    .debug()
    .map(vnode =>
      div(".tutorial-container", [
        "These are tutorials",
        vnode,
        button({ props: { className: ".clear-completed" } }, "clear completed"),
        button({ attrs: { "data-action": "navigate" } }, "to wallet page")
      ])
    );
};

const intent = ({ DOM }: Sources): Actions => {
  return {
    deleteCompleted$: DOM.select(".clear-completed")
      .events("click")
      .mapTo(null)
  };
};
