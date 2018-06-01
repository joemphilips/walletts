import { App, State as AppState } from "./app";
import {
  Sidebar,
  State as SidebarState,
  SidebarItemProps,
  BaseSinks,
  BaseSources
} from "walletts-components";
import xs, { Stream } from "xstream";
import { div, VNode } from "@cycle/dom";
import { defaultStyle as Style, defaultTheme } from "./styles";
import { DomainState, initializeState } from "./domainStates";
import isolate from "@cycle/isolate";
import { AccountDomainState, defaultAccount } from "./domainStates/account";
import { Lens, StateSource } from "cycle-onionify";

export interface Sources extends BaseSources {
  onion: StateSource<State>;
}

export interface Sinks extends BaseSinks {
  onion: Stream<Reducer>;
}

export interface State extends DomainState {}

const sidebarLens: Lens<State, SidebarState> = {
  get: state => ({
    theme: state && state.theme ? state.theme : defaultTheme,
    sidebarItems: state && state.theme ? accountToItem(state.account) : []
  }),
  set: (state, childState) => state
};

function accountToItem(a: AccountDomainState): ReadonlyArray<SidebarItemProps> {
  return Object.keys(a).map(id => ({
    name: a[id].name,
    icon: a[id].iconUrl ? a[id].iconUrl : "fa-google-wallet"
  }));
}

const appLens: Lens<State, AppState> = {
  get: (state: any) => ({
    counter: { count: 0 },
    speaker: undefined,
    account: state.account
  }),
  set: (state, child) => ({
    ...(state as State),
    account: child && child.account ? child.account : defaultAccount
  })
};

export type Reducer = (prev?: State) => State;

/**
 * main entry point which wraps app by sidebar (and possibly other things like header, footer)
 * @param sources
 */
export function AppContainer(sources: Sources): Sinks {
  const appSinks = isolate(App, { onion: appLens })(sources);

  // reducers
  const initialState = initializeState();
  const initialReducer$: Stream<Reducer> = xs.of(
    (prev?: State) => (prev ? prev : initialState)
  );
  const sidebarSinks = isolate(Sidebar, { onion: sidebarLens })(sources);
  const reducer$ = xs.merge<Reducer>(
    initialReducer$,
    sidebarSinks.onion,
    appSinks.onion
  );

  // view
  const vdom$ = view(sidebarSinks.DOM, appSinks.DOM);

  return {
    DOM: vdom$,
    onion: reducer$
  };
}

export function view(
  sidebarDOM$: Stream<VNode>,
  appDOM$: Stream<VNode>
): Stream<VNode> {
  const vdom$ = xs.combine(sidebarDOM$, appDOM$).map(([side, app]) => {
    // TODO: return view
    return div(`.${Style.appContainerStyle}`, [side, app]);
  });

  return vdom$;
}
