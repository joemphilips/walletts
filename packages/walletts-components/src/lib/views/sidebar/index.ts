import { div, VNode } from "@cycle/dom";
import { Icon, IconType } from "cycle-semantic-ui";

export namespace Sidebar {
  export type SideBarContents = ReadonlyArray<SideBarItemProps>;

  export interface SideBarItemProps {
    readonly name: string;
    readonly icon: IconType;
  }

  export function render(sources, props: SideBarContents): VNode {
    // TODO: implement Model, Intent and make reactive

    return div("mock-class-for-sidebar", "TODO: this shuold be replaced")
  }
}
