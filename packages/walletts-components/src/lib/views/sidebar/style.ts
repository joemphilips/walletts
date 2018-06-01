import * as csstips from 'csstips';
import * as csx from 'csx';
import { style } from 'typestyle';

export const sidebarStyle = style(
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
export const sidebarItemStyle = style({
  $nest: {
    '&:hover': {
      border: 'medium white',
      transition: 'border-color .2s linear'
    }
  },
  borderRadius: '3px'
});
