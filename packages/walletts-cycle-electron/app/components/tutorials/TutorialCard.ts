import { DOMSource, li, VNode, span, button } from "@cycle/dom";
import isolate from "@cycle/isolate";
import { StateSource } from "cycle-onionify";
import xs, { Stream } from "xstream";
import { BaseSinks, BaseSources, Component } from "../../interfaces";

interface Sources extends BaseSources {
  readonly onion: StateSource<State>;
}
interface Sinks extends BaseSinks {
  readonly onion: Stream<Reducer>;
}
export interface State {
  readonly id: number;
  readonly onelineExplanation: string;
  readonly isChecked: boolean;
}

export const defaultState: State = {
  id: 0,
  onelineExplanation: "this is default tutorial",
  isChecked: false
};

export type Reducer = (prev: State) => State;

const tutorialCard: Component<Sources, Sinks> = ({
  DOM,
  onion
}: Sources): Sinks => {
  const state$ = onion.state$;
  const reducer$ = model(DOM);
  return {
    DOM: view(state$),
    onion: reducer$
  };
};

export const main = (sources: Sources): Sinks => isolate(tutorialCard)(sources);

export const model = (dom$: DOMSource): Stream<Reducer> => {
  const check$ = dom$
    .select(".checkbox")
    .events("click")
    .map(ev => (prev: State): State => ({
      ...prev,
      isChecked: !prev.isChecked // !(ev.target as HTMLInputElement).checked
    }));
  const trimReducer$ = dom$
    .select(".trim")
    .events("click")
    .mapTo(function trimReducer(prevState: State): State {
      return {
        ...prevState,
        onelineExplanation: prevState.onelineExplanation.slice(0, -1)
      };
    });

  return xs.merge(check$, trimReducer$);
};

const view = (state$: Stream<State>): Stream<VNode> => {
  return state$.map(s =>
    /*    
    input(".input-checkbox", {
          attrs: { type: "checkbox", value: s.onelineExplanation },
          props: { checked: s.isChecked }
        })*/
    li(`.tutorial-card`, [
      span(".conent", "hoge"),
      span(".trim", "(trim)"),
      button(".checkbox", { props: { checked: s.isChecked } }, "checkbox"),
      span(".oneline-explanation", s.onelineExplanation)
    ])
  );
};
