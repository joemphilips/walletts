import { div, VNode } from '@cycle/dom';
import isolate from '@cycle/isolate';
import { StateSource } from 'cycle-onionify';
import { Button } from 'cycle-semantic-ui';
import xs, { Stream } from 'xstream';
import { BaseSinks, BaseSources } from '../../..';
import { SidebarItemProps } from '../../collections/accountsIcon';
import { SidebarAccountsBar } from '../../elements/sidebarAccountsBar';
import { defaultTheme, ThemeConfig } from '../../themes';
import { sidebarStyle } from './style';

export interface State {
  readonly theme: ThemeConfig;
  readonly sidebarItems: ReadonlyArray<SidebarItemProps | null>;
  readonly activeItem?: string;
  readonly customSideBarHeader?: VNode;
  readonly beforeNav?: ReadonlyArray<any>;
  readonly afterNav?: ReadonlyArray<any>;
  readonly customSidebarFooter?: VNode;
}
const defaultState = {
  theme: defaultTheme,
  sidebarItems: [
    {
      name: 'sidebar item 1',
      iccon: 'hoge'
    }
  ]
};
export type Reducer = (prev?: State) => State;
export interface Sources extends BaseSources {
  readonly onion: StateSource<State>;
}
export interface Sinks extends BaseSinks {
  readonly onion: Stream<Reducer>;
}

export function Sidebar(sources: Sources): Sinks {
  const sidebarAccountsBarSinks = isolate(SidebarAccountsBar, 'sidebarItems')(
    sources
  );

  const buttonSink = Button.run({
    DOM: sources.DOM,
    props$: xs.of({ icon: true }),
    content$: xs.of('Config')
  });

  const reducer$ = xs.merge<Reducer>(model(), sidebarAccountsBarSinks.onion);
  const vdom$ = view(sidebarAccountsBarSinks.DOM, buttonSink.DOM);
  return {
    DOM: vdom$,
    onion: reducer$
  };
}

function model(): Stream<Reducer> {
  const initReducer$: Stream<Reducer> = xs.of(
    prev => (prev ? prev : defaultState)
  );

  return xs.merge(initReducer$);
}

function view(
  accountsTabDOM$: Stream<VNode>,
  button$: Stream<VNode>
): Stream<VNode> {
  return xs
    .combine(accountsTabDOM$, button$)
    .map(([a, b]) => div(`.${sidebarStyle}`, {}, [a, b]));
}
