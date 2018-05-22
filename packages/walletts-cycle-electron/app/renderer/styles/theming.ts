import { types } from "typestyle";

export type ThemeSource = {
  readonly fontFamily: string;
  readonly fontSizeBase: types.CSSFontSize;
  readonly fontSizeSmall: types.CSSFontSize;
  readonly fontSizeNormal: types.CSSFontSize;
  readonly fontSizeLarge: types.CSSFontSize;
  readonly fontSizeH1: types.CSSFontSize;
  readonly fontSizeH2: types.CSSFontSize;
  readonly fontSizeH3: types.CSSFontSize;
  readonly fontSizeH4: types.CSSFontSize;
  readonly fontSizeH5: types.CSSFontSize;
  readonly fontSizeH6: types.CSSFontSize;
  readonly fontOpacity: number;
  readonly fontWeights: types.CSSFontWeight;
  readonly appBg: types.CSSColor;
};
