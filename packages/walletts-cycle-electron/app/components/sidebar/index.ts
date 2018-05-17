import { BaseSources, BaseSinks } from "../../interfaces";
import xs, { Stream } from "xstream";
import { div, VNode } from "@cycle/dom";
import { Icon, IconType } from "cycle-semantic-ui";

export namespace Sidebar {
  export type SideBarContents = ReadonlyArray<SideBarItemProps>;

  export interface SideBarItemProps {
    readonly name: string;
    readonly icon: IconType;
  }

  export interface Sinks extends BaseSinks {
    DOM: Stream<VNode>;
  }

  export function render(sources: BaseSources, props: SideBarContents): VNode {
    // TODO: implement Model, Intent and make reactive
    const vdom$ = view(props);

    return {
      DOM: vdom$
    };
  }
  export function view(props: SideBarContents): Stream<VNode> {
    return xs.of(div);
  }
}
