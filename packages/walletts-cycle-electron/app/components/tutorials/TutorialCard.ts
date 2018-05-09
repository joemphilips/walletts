import { DOMSource, input, li, VNode } from '@cycle/dom';
import isolate from '@cycle/isolate';
import { StateSource } from 'cycle-onionify';
import xs, { Stream } from 'xstream';
import { BaseSinks, BaseSources, Component } from '../../interfaces';

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

const defaultState: State = {
  id: 0,
  onelineExplanation: 'this is default tutorial',
  isChecked: false
};

export type Reducer = (prev: State) => State | undefined;

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
  const init$ = xs.of<Reducer>(
    prevState => (prevState === undefined ? defaultState : prevState)
  );
  const check$ = dom$
    .select('.input-checkbox')
    .events('click')
    .map(ev => (state: State) => ({
      ...state,
      isChecked: !(ev.target as HTMLInputElement).checked
    }));

  return xs.merge(init$, check$);
};

const view = (state$: Stream<State>): Stream<VNode> => {
  return state$.map(s =>
    li(
      `.todo#${s.id}`,
      input('.input-checkbox', {
        attrs: { type: 'checkbox' },
        props: { checked: s.isChecked }
      })
    )
  );
};
