import { div, VNode } from "@cycle/dom";
import * as csstips from 'csstips'
import { IconType } from "cycle-semantic-ui";
import { style } from 'typestyle'

export namespace Sidebar {
  export type SideBarContents = ReadonlyArray<SideBarItemProps>;

  export interface SideBarItemProps {
    readonly name: string;
    readonly icon: IconType;
  }

  const sidebarStyle = style(csstips.horizontal, csstips.center)
  export function render(sources: any, props: SideBarContents): VNode {
    // tslint:disable-next-line
    console.log(sources)
    // tslint:disable-next-line
    console.log(props)
    // TODO: implement Model, Intent and make reactive
    return div(sidebarStyle, "TODO: this shuold be replaced")
  }
}
