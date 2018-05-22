import { types } from "typestyle";

type Font = string;

type Height = types.CSSValue<
  "auto" | types.CSSLength | types.CSSPercentage | types.CSSGlobalValues
>;
type Width = types.CSSValue<
  "auto" | types.CSSLength | types.CSSPercentage | types.CSSGlobalValues
>;
// TODO: this is better defined by types
type FontSize = number | string;
type OverFlow = string;

interface ThemeVariableObj {
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
    light: types.CSSFontWeight;
    regular: types.CSSFontWeight;
    semiBold: types.CSSFontWeight;
    bold: types.CSSFontWeight;
  };
  readonly appBg: types.CSSColor;
  readonly appBgSize: FontSize;
  readonly themeColors: {
    primary: types.CSSColorSet;
    highlight1: types.CSSColorSet;
    highlight2: types.CSSColorSet;
    lowlight1: types.CSSColorSet;
    lowlight2: types.CSSColorSet;
    lowlightGradient: types.CSSGradient;
    lightBg: types.CSSColorSet;
    light2Bg: types.CSSColorSet;
    mediumBg: types.CSSColorSet;
    darkBg: types.CSSColorSet;
    white: types.CSSColorSet;
    black: types.CSSColorSet;
    transparent: types.CSSColorSet;
  };

  readonly borderWidth: FontSize;
  readonly borderStyle: types.CSSLineStyleSet;
  readonly border1: string;
  readonly border2: string;
  readonly borderTransparent: string;
  readonly borderRadius: string;
  readonly smoothTransition: any;
  readonly logoUrl: any;
  readonly headerHeight: Height;
  readonly footerHeight: Height;
}

export type ThemeVariableSource = Partial<ThemeVariableObj>;

/** Theme variable which defines basic look-and-feel
 * new theme author should satisfiy this interface
 */
export type ThemeVariable = ThemeVariableObj;

/** Theme Configuration more detailed than ThemeVariable
 * right now, it is mostly the same with the bpanel, but it may change in the future
 * typing is not perfect, but it does a job.
 */
export interface ThemeConfigObj {
  app: {
    container: {
      height: Height;
      overflowY: OverFlow;
    };
    body: {
      color: types.CSSColorSet;
      background: types.CSSColorSet;
      backgroundSize: number;
      height: Height;
      minHeight: Height;
      overflowY: OverFlow;
      fontFamily: Font;
    };
    content: {
      height: Height;
    };
  };
  sidebar: {
    container: {
      height: Height;
      minHeight: Height;
    };
    link: {
      minWidth: Width;
      width: Width;
      ":hover": any;
    };
    item: any;
    itemActive: any;
    itemIcon: any;
    logoContainer: any;
    logoImg: any;
    footer: any;
    footerText: any;
  };
  headerbar: {
    container: any;
    icon: any;
    networkStatus: any;
    nodeText: any;
    text: any;
  };
  footer: {
    container: any;
    progress: any;
    text: any;
  };
  button: {
    primary: any;
    action: any;
  };
  header: {
    h1: {
      fontSize: FontSize;
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

  input: any;

  link: any;

  table: any;

  tableRawStyle?: (arg: any) => any;

  expandedRaw?: any;

  tabMenu?: any;

  text?: any;
}

export type ThemeConfigSource = Partial<ThemeConfigObj>;
export type ThemeConfig = ThemeConfigObj;
