import * as CSS from 'csstype';
import { types } from 'typestyle';

export type DeepReadonly<T> = { readonly [P in keyof T]: DeepReadonly<T[P]> };
export type Font = string;

export type Height = CSS.HeightProperty<string>;
export type Width = CSS.WidthProperty<string>;
// TODO: this is better defined by types
export type FontSize = CSS.FontSizeProperty<string>;
export type OverFlow = string;

/* tslint:disable:no-unused-expression no-expression-statement readonly-keyword */
export type ThemeVariableObj = DeepReadonly<{
  readonly fontFamily: Font;
  readonly fontSizeBase: FontSize;
  readonly fontSizeSmall: FontSize;
  readonly fontSizeNormal: FontSize;
  readonly fontSizeLarge: FontSize;
  readonly fontSizeH1: FontSize;
  readonly fontSizeH2: FontSize;
  readonly fontSizeH3: FontSize;
  readonly fontSizeH4: FontSize;
  readonly fontSizeH5: FontSize;
  readonly fontSizeH6: FontSize;
  readonly fontOpacity: number;
  readonly fontWeights: {
    bold: CSS.FontWeightProperty;
    light: CSS.FontWeightProperty;
    regular: CSS.FontWeightProperty;
    semiBold: CSS.FontWeightProperty;
  };
  readonly appBg: CSS.ColorProperty;
  readonly appBgSize: CSS.BackgroundSizeProperty<string>;
  readonly themeColors: {
    primary: CSS.ColorProperty;
    highlight1: CSS.ColorProperty;
    highlight2: CSS.ColorProperty;
    lowlight1: CSS.ColorProperty;
    lowlight2: CSS.ColorProperty;
    lowlightGradient?: any;
    lightBg: CSS.ColorProperty;
    light2Bg: CSS.ColorProperty;
    mediumBg: CSS.ColorProperty;
    darkBg: CSS.ColorProperty;
    white: CSS.ColorProperty;
    black: CSS.ColorProperty;
    transparent: CSS.ColorProperty;
  };

  readonly borderWidth: FontSize;
  readonly borderStyle: CSS.BorderStyleProperty;
  readonly border1: string;
  readonly border2: string;
  readonly borderTransparent: string;
  readonly borderRadius: string;
  readonly smoothTransition: any;
  readonly logoUrl: any;
  readonly headerHeight: Height;
  readonly footerHeight: Height;
}>;

export type ThemeVariableSource = Partial<ThemeVariableObj>;

/**
 * Theme variable which defines basic look-and-feel
 * new theme author should satisfiy this interface
 */
export type ThemeVariable = ThemeVariableObj;

/**
 * Theme Configuration more detailed than ThemeVariable
 * right now, it is mostly the same with the bpanel, but it may change in the future
 * typing is not perfect, but it does a job.
 */
export interface ThemeConfigObj {
  app: {
    container: types.NestedCSSProperties;
    body: types.NestedCSSProperties;
    content: types.NestedCSSProperties;
  };
  sidebar: {
    container: types.NestedCSSProperties;
    link: types.NestedCSSProperties;
    item: types.NestedCSSProperties;
    itemActive: types.NestedCSSProperties;
    itemIcon: types.NestedCSSProperties;
    logoConttainer: types.NestedCSSProperties;
    logoImg: types.NestedCSSProperties;
    footer: types.NestedCSSProperties;
    footerText: types.NestedCSSProperties;
  };
  headerbar: {
    container: types.NestedCSSProperties;
    icon: types.NestedCSSProperties;
    networkStatus: types.NestedCSSProperties;
    nodeText: types.NestedCSSProperties;
    text: types.NestedCSSProperties;
  };
  footer: {
    container: types.NestedCSSProperties;
    progress: types.NestedCSSProperties;
    text: types.NestedCSSProperties;
  };
  button: {
    primary: types.NestedCSSProperties;
    action: types.NestedCSSProperties;
  };
  header: types.NestedCSSProperties;

  input: any;

  link: any;

  table: any;

  // tslint:disable-next-line:no-mixed-interface
  tableRawStyle?: (arg: any) => any;

  // tslint:disable-next-line:no-mixed-interface
  expandedRaw?: any;

  tabMenu?: any;

  text?: any;
}

export type ThemeConfigSource = Partial<ThemeConfigObj>;
export type ThemeConfig = ThemeConfigObj;
