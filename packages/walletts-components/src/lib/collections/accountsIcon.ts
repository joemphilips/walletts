import { div, VNode } from '@cycle/dom';
import xs, { Stream } from 'xstream';
import { BaseSinks, BaseSources } from '../..';

export interface Sources extends BaseSources {
  readonly props: {
    readonly id: string;
    readonly mainComponentPath: string;
  };
}

export type SetActiveAction = 'setActive';
export type Action = SetActiveAction;
export type Sinks = BaseSinks;

export function main(sources: Sources): Sinks {
  const action$ = intent(sources);
  const router$ = action$
    .filter(a => a === 'setActive')
    .mapTo(sources.props.mainComponentPath);
  const vdom$ = view();

  return {
    DOM: vdom$,
    router: router$
  };
}

function view(): Stream<VNode> {
  return xs.of(div('fa fa-twitter'));
}

function intent(sources: Sources): Stream<Action> {
  return sources.DOM.select(sources.props.id)
    .events('click')
    .mapTo('setActive' as SetActiveAction);
}
