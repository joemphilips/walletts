import { types } from "typestyle";

export interface ThemeVariable {
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
  readonly fontWeights: {
    light: types.CSSFontWeight;
    regular: types.CSSFontWeight;
    semiBold: types.CSSFontWeight;
    bold: types.CSSFontWeight;
  };
  readonly appBg: types.CSSColor;
  readonly appBgSize: types.CSSFontSize;
  readonly themeColors: {
    primary: types.CSSColorSet;
    highlight1: types.CSSColorSet;
    highlight2: types.CSSColorSet;
    lowlight1: types.CSSColorSet;
    lowlight2: types.CSSColorSet;
    lightBg: types.CSSColorSet;
    light2Bg: types.CSSColorSet;
    mediumBg: types.CSSColorSet;
    darkBg: types.CSSColorSet;
    white: types.CSSColorSet;
    black: types.CSSColorSet;
    transparent: types.CSSColorSet;
  };

  readonly borderWidth: types.CSSFontSize;
  readonly borderStyle: types.CSSLineStyleSet;
  readonly border1: string;
  readonly border2: string;
  readonly borderTransparent: string;
  readonly borderRadius: string;
  readonly smoothTransition: any;
  readonly logoUrl: any;
}

/** Theme variable which will be the source to define the ThemeConfig
 * new Theme creator should wright his own theme which satisfies this interface
 */
export type ThemeSource = Partial<ThemeVariable>;

/** theme configuration which will be derived from ThemeVariable
 * right now, it is mostly same with the bpanel, but it may change in the future
 */
export interface ThemeConfig {
  app: {
    container: {};
    body: {};
    content: {};
    sidebarContainer: {};
  };
  sidebar: {
    container: {};
    link: {};
    item: {};
    itemActive: {};
    itemIcon: {};
    logoContainer: {};
    logoImg: {};
    footer: {};
    footerText: {};
  };
  headerbar: {
    container: {};
    icon: {};
    networkStatus: {};
    nodeText: {};
    text: {};
  };
  footer: {
    container: {};
    progress: {};
    text: {};
  };
  button: {
    primary: {};
    action: {};
  };
  header: {
    h1: {
      fontSize: types.CSSFontSize;
    };
    h2: {
      fontSize: types.CSSFontSize;
    };
    h3: {
      fontSize: types.CSSFontSize;
    };
    h4: {
      fontSize: types.CSSFontSize;
    };
    h5: {
      fontSize: types.CSSFontSize;
    };
    h6: {
      fontSize: types.CSSFontSize;
    };
  };

  input: {};

  link: {};

  table: {};

  tableRawStyle: (arg: any) => any;

  expandedRaw: {};

  tabMenu: {};

  text: {};
}
