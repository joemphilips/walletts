import {
  App,
  State as AppState,
  Sources as AppSources,
  Sinks as AppSinks
} from "./app";
import { Sidebar } from "walletts-components";
import { Stream } from "xstream";
import { div, VNode } from "@cycle/dom";
import { IconType } from "cycle-semantic-ui";
import { defaultStyle as Style } from "./styles/common";

export interface Sources extends AppSources {}

export interface Sinks extends AppSinks {}

export interface State extends AppState {
  readonly sidebarContents: Sidebar.SideBarContents;
}
const defaultState: State = {
  sidebarContents: {
    beforeNav: [],
    items: [
      {
        name: "default sidebar content",
        icon: IconType.Bitcoin
      },
      {
        name: "second default sidebar content",
        icon: IconType.Bicycle
      }
    ],
    afterNav: []
  }
};

/**
 * main entry point which wraps app by sidebar (and possibly other things like header, footer)
 * @param sources
 */
export function AppContainer(sources: Sources): Sinks {
  const childSink = App(sources);
  const state = makeState();
  const sidebar = Sidebar.render(sources, state.sidebarContents);
  const vdom$ = view(sources, childSink.DOM, sidebar);

  return {
    ...childSink,
    DOM: vdom$
  };
}

export function view(
  sources: Sources,
  childDom$: Stream<VNode>,
  sidebarDom: VNode
): Stream<VNode> {
  const vdom$ = childDom$.map(main => {
    // TODO: return view
    return div(`.${Style.appContainerStyle}`, [sidebarDom, main]);
  });

  return vdom$;
}

/**
 * TODO: initialize dynamically
 */
export function makeState() {
  return defaultState;
}
