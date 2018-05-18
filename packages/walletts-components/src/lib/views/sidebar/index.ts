import { div, VNode } from '@cycle/dom';
import * as csstips from 'csstips';
import * as csx from 'csx';
import { IconType } from 'cycle-semantic-ui';
import { style } from 'typestyle';

export namespace Sidebar {
  export type SideBarContents = ReadonlyArray<SideBarItemProps>;

  export interface SideBarItemProps {
    readonly name: string;
    readonly icon: IconType;
  }

  const sidebarStyle = style(
    csstips.vertical,
    csstips.centerCenter,
    csstips.content,
    csstips.width(csx.rem(10)),
    csstips.height(csx.rem(100))
  );
  export function render(sources: any, props: SideBarContents): VNode {
    // tslint:disable-next-line
    console.log(sources);
    // tslint:disable-next-line
    console.log(props);
    // TODO: implement Model, Intent and make reactive
    return div(sidebarStyle, 'shuold be replaced');
  }
}
