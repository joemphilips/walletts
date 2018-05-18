import { div, VNode } from '@cycle/dom';
import * as csstips from 'csstips';
import * as csx from 'csx';
import { IconType } from 'cycle-semantic-ui';
import { style } from 'typestyle';

export namespace Sidebar {
  export interface SideBarContents {
    readonly items: ReadonlyArray<SideBarItemProps>;
    readonly customSideBarHeader?: VNode;
    readonly beforeNav: ReadonlyArray<any>;
    readonly afterNav: ReadonlyArray<any>;
    readonly customSidebarFooter?: VNode;
  }

  export interface SideBarItemProps {
    readonly name: string;
    readonly icon: IconType;
  }

  // styles
  const sidebarStyle = style(
    csstips.vertical,
    csstips.centerCenter,
    csstips.scroll,
    csstips.content,
    csstips.width(csx.rem(10)),
    csstips.height('100'),
    {
      backgroundColor: 'lightgray'
    }
  );
  const sidebarItemStyle = style();

  export function render(sources: any, props: SideBarContents): VNode {
    // tslint:disable-next-line
    console.log(sources);
    // tslint:disable-next-line
    console.log(props);
    // TODO: implement Model, Intent and make reactive
    return div(
      `.${sidebarStyle}`,
      props.items.map((prop, index) =>
        div(`.${sidebarItemStyle}`, `this is ${prop} of item no. ${index}`)
      ),
      'shuold be replaced'
    );
  }
}
