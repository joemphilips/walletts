import { div, VNode } from "@cycle/dom";
import { IconType } from "cycle-semantic-ui";

export namespace Sidebar {
  export type SideBarContents = ReadonlyArray<SideBarItemProps>;

  export interface SideBarItemProps {
    readonly name: string;
    readonly icon: IconType;
  }

  export function render(sources: any, props: SideBarContents): VNode {
    // tslint:disable-next-line
    console.log(sources)
    // tslint:disable-next-line
    console.log(props)
    // TODO: implement Model, Intent and make reactive
    return div("mock-class-for-sidebar", "TODO: this shuold be replaced")
  }
}
