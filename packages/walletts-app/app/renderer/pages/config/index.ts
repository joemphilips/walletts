import { StateSource } from "cycle-onionify";
import { Container } from "cycle-semantic-ui";
import xs, { Stream, MemoryStream } from "xstream";
import { BaseSources, BaseSinks, ThemeConfig } from "../../interfaces";
import { apiBaseUrl, ApiCategory } from "../../constants";
import { DOMSource, div, button, VNode } from "@cycle/dom";
import { defaultStyle as Style } from "../../styles";
import { HTTPSource, RequestOptions } from "@cycle/http";
import { defaultTheme } from "../../styles";

export interface Sources extends BaseSources {
  readonly onion: StateSource<State>;
}

export interface Sinks extends BaseSinks {
  readonly onion: Stream<Reducer>;
}

export interface State {
  readonly theme: ThemeConfig;
}

interface LoadNewThemeAction {
  readonly kind: "loadNewTheme";
  readonly payload: {
    readonly themeName: string;
  };
}

export const defaultState = {
  theme: defaultTheme
};

export type Action = LoadNewThemeAction;

export type Reducer = (prev: State) => State | null;

export function main(sources: Sources): Sinks {
  const state$ = sources.onion.state$;
  const action$ = intent(sources.DOM);
  const request$ = asyncIntent(action$);
  const reducer$ = model(action$, sources.HTTP);
  const childSink = Container.run(sources, "configContainer");
  const vdom$ = view(state$, childSink.DOM);
  return {
    DOM: vdom$,
    HTTP: request$,
    onion: reducer$
  };
}

function asyncIntent(action$: Stream<Action>): Stream<RequestOptions> {
  return action$.filter(a => a.kind === "loadNewTheme").map(
    a =>
      ({
        url: apiBaseUrl + "/themes" + "?name=" + a.payload.themeName,
        category: "theme"
      } as RequestOptions)
  );
}

function model(action$: Stream<Action>, HTTP: HTTPSource): Stream<Reducer> {
  const init$ = xs.of<Reducer>(
    prevState => (prevState === undefined ? defaultState : prevState)
  );

  // this cast is required since it was unable to run `flatten` against `MemoryStream` in xstream
  // refs: https://github.com/staltz/xstream/issues/248
  const updateTheme$ = (HTTP.select(ApiCategory.theme) as Stream<any>)
    .flatten()
    .map((res: Response) => (res && res.ok ? res.body : null))
    .map((b: any) => (state: State) => ({
      ...state,
      theme: b.theme ? b.theme : state.theme // do not update theme if it failed to grab theme object from server
    })) as Stream<Reducer>;

  return xs.merge(init$, updateTheme$);
}

function intent(DOM: DOMSource): Stream<Action> {
  return DOM.select(".theme-install")
    .events("click")
    .map(
      x =>
        ({
          kind: "loadNewTheme",
          payload: {
            themeName: x.srcElement ? x.srcElement.innerHTML : "unknown"
          }
        } as LoadNewThemeAction)
    );
}

function view(
  state$: MemoryStream<State>,
  childVdom$: Stream<VNode>
): Stream<VNode> {
  return xs.combine(state$, childVdom$).map(([s, child]) =>
    div(`.${s.theme.app} .${Style.pageBase}`, {}, [
      button(
        `.${Style.buttonStyle} .theme-install`,
        {
          props: { value: "get theme" }
        },
        "theme1"
      ),
      child
    ])
  );
}
