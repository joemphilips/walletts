import { a, li, VNode } from '@cycle/dom';
import xs, { Stream } from 'xstream';
import { BaseSinks, BaseSources } from '../..';

export interface Sources extends BaseSources {
  readonly props: {
    readonly id: string;
    readonly mainComponentPath: string;
  };
}

export interface SidebarItemProps {
  readonly name: string;
  readonly icon: string;
}

export type SetActiveAction = 'setActive';
export type Action = SetActiveAction;
export type Sinks = BaseSinks;

export function main(sources: Sources): Sinks {
  // tslint:disable-next-line
  console.log(sources);

  const action$ = intent(sources);
  const router$ = action$
    .filter(ac => ac === 'setActive')
    .mapTo(sources.props.mainComponentPath);
  const vdom$ = view().debug();

  return {
    DOM: vdom$,
    router: router$
  };
}

function view(): Stream<VNode> {
  return xs.of(li('fa fa-twitter', {}, [a('hoge')]));
}

function intent(sources: Sources): Stream<Action> {
  return sources.DOM.select(sources.props.id)
    .events('click')
    .mapTo('setActive' as SetActiveAction);
}
