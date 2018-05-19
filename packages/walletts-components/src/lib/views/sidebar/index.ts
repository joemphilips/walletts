import { div, VNode, nav } from '@cycle/dom';
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
  const sidebarItemStyle = style({
    $nest: {
      '&:hover': {
        border: 'medium solid white',
        transition: 'border-color .2s linear'
      }
    },
    borderRadius: '3px'
  });

  export function render(sources: any, props: SideBarContents): VNode {
    // tslint:disable-next-line
    console.log(`render function received ${sources}`);
    // tslint:disable-next-line
    console.log(`going to render ${JSON.stringify(props)}`);
    // TODO: implement Model, Intent and make reactive
    return nav(
      `.${sidebarStyle}`,
      {},
      props.items.map(prop =>
        div(`.${sidebarItemStyle}`, {}, `this is ${prop.name}`)
      )
    );
  }
}
