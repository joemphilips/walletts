import { ThemeConfig } from "../interfaces";
import { createDefaultTheme } from "./defaultThemeVariable";
import { ThemeVariable } from "../interfaces/themes";
import * as csx from "csx";

export const createThemeConfig = (
  themeVariable: ThemeVariable
): ThemeConfig => {
  const {
    /// *****
    /// FONTS
    /// *****
    fontSizeBase,
    // Font Family
    fontFamily,
    // Font Opacity
    fontOpacity,
    // Font Weights
    fontWeights,
    /// ***********
    /// BACKGROUNDS
    /// ***********
    appBg,
    appBgSize,
    /// ******
    /// COLORS
    /// ******
    themeColors,
    /// *******
    /// BORDERS
    /// *******
    borderWidth,
    borderStyle,
    borderTransparent,
    border1,
    border2,
    borderRadius,
    /// ***********
    /// TRANSITIONS
    /// ***********
    smoothTransition,
    /// *******************
    /// COMPONENT VARIABLES
    /// *******************
    // Logo
    logoUrl,

    /// *****
    /// FONTS
    /// *****
    // Font Size
    fontSizeSmall,
    fontSizeNormal,
    fontSizeLarge,
    fontSizeH1,
    fontSizeH2,
    fontSizeH3,
    fontSizeH4,
    fontSizeH5,
    fontSizeH6,
    // Header
    headerHeight,
    // Footer
    footerHeight
  } = themeVariable;

  const appHeight = `calc(100vh - ${footerHeight})`;
  const lowlightGradient =
    themeColors.lowlightGradient ||
    `linear-gradient(to left, ${themeColors.lowlight1}, ${
      themeColors.lowlight2
    })`;

  /// ******
  /// THEME CONFIG
  /// ******

  const defaultButtonStyle = {
    backgroundColor: themeColors.transparent,
    border: `${borderWidth} ${borderStyle} ${themeColors.highlight1}`,
    borderRadius: borderRadius,
    color: themeColors.highlight1,
    cursor: "pointer",
    fontSize: fontSizeNormal
  };

  const transition = {
    WebkitTransition: smoothTransition,
    MozTransition: smoothTransition,
    OTransition: smoothTransition,
    msTransition: smoothTransition,
    transition: smoothTransition
  };

  const themeConfig = {
    // MAIN APP COMPONENTS

    // App
    app: {
      container: {
        height: appHeight,
        overflowY: "overlay"
      },
      body: {
        color: themeColors.primary,
        background: appBg,
        backgroundSize: appBgSize,
        height: "100%",
        minHeight: csx.rem(18.75 * fontSizeBase),
        overflowY: "visible",
        fontFamily
      },
      content: {
        height: `calc(100vh - ${footerHeight} - ${headerHeight})`
      }
    },

    // Sidebar
    sidebar: {
      container: {
        height: appHeight,
        minHeight: csx.rem(18.75 * fontSizeBase)
      },
      link: {
        minWidth: csx.rem(fontSizeBase * 9.375),
        textDecoration: "none",
        width: "100%",
        ":hover": {
          textDecoration: "none"
        }
      },
      item: {
        border: borderTransparent,
        color: themeColors.primary,
        fontWeight: fontWeights.light,
        textDecoration: "none",
        ...transition,
        ":hover": {
          border: border1
        }
      },
      itemActive: {
        background: lowlightGradient
      },
      itemIcon: {},
      logoContainer: {
        opacity: fontOpacity,
        textAlign: "center",
        width: "100%"
      },
      logoImg: {
        height: csx.rem(3.75 * fontSizeBase),
        width: csx.rem(3.75 * fontSizeBase)
      },
      footer: {},
      footerText: {
        fontSize: fontSizeSmall,
        fontWeight: fontWeights.light,
        opacity: fontOpacity
      }
    },

    // Header Bar
    headerbar: {
      container: {
        height: headerHeight
      },
      icon: {
        color: themeColors.highlight1,
        fontSize: fontSizeLarge,
        marginLeft: fontSizeSmall
      },
      networkStatus: {
        fontSize: fontSizeSmall,
        opacity: fontOpacity
      },
      nodeText: {
        color: themeColors.highlight2
      },
      text: {
        fontSize: fontSizeSmall
      }
    },

    // Footer
    footer: {
      container: {
        backgroundColor: themeColors.light2Bg,
        bottom: 0,
        color: themeColors.primary,
        height: footerHeight,
        position: "fixed",
        width: "100%"
      },
      progress: {
        backgroundColor: themeColors.transparent
      },
      text: {
        fontSize: fontSizeSmall
      }
    },

    // BPANEL UI COMPONENTS

    // Button
    button: {
      primary: {
        ...defaultButtonStyle,
        ...transition,
        ":hover": {
          backgroundColor: themeColors.highlight1,
          color: themeColors.white
        }
      },
      action: {
        border: "none",
        backgroundColor: themeColors.primary,
        cursor: "pointer",
        padding: csx.rem(0.3125 * fontSizeBase),
        ...transition,
        ":hover": {
          background: lowlightGradient,
          color: themeColors.white
        }
      }
    },

    // Header
    header: {
      h1: {
        fontSize: fontSizeH1
      },
      h2: {
        fontSize: fontSizeH2
      },
      h3: {
        fontSize: fontSizeH3
      },
      h4: {
        fontSize: fontSizeH4
      },
      h5: {
        fontSize: fontSizeH5
      },
      h6: {
        fontSize: fontSizeH6
      }
    },

    // Input
    input: {
      checkbox: {},
      color: {},
      date: {},
      "datetime-local": {},
      email: {},
      file: {
        ...defaultButtonStyle
      },
      month: {},
      number: {},
      password: {
        backgroundColor: themeColors.darkBg,
        border: "none",
        color: themeColors.primary
      },
      radio: {},
      range: {},
      reset: {
        ...defaultButtonStyle
      },
      search: {},
      submit: {
        ...defaultButtonStyle
      },
      tel: {},
      text: {
        backgroundColor: themeColors.darkBg,
        border: "none",
        color: themeColors.primary
      },
      time: {},
      url: {},
      week: {}
    },

    // Link
    link: {
      default: {
        color: themeColors.highlight1,
        fontSize: fontSizeNormal,
        textDecoration: "underline"
      }
    },

    // Table
    table: {
      container: {
        border: border2
      },
      header: {
        fontWeight: fontWeights.semiBold,
        textTransform: "capitalize"
      },
      body: {
        fontWeight: fontWeights.light
      }
    },

    expandedRow: {
      container: {
        height: "100%"
      },
      mainDataContainer: {
        display: "flex",
        flexDirection: "column"
      },
      subDataContainer: {
        display: "flex",
        flexDirection: "row"
      },
      rowHeader: {
        width: "6rem"
      },
      dataRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: "7px"
      },
      borderedCol: {
        border: border2,
        overflow: "auto",
        width: "80%"
      },
      copyIcon: {
        lineHeight: "2rem",
        cursor: "pointer",
        color: themeColors.highlight1
      }
    },

    //Tab Menu
    tabMenu: {
      headerContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "start",
        alignItems: "center"
      },
      headerText: {
        marginBottom: "-1px"
      },
      headerTextActive: {
        backgroundColor: themeColors.transparent,
        border: border2,
        borderBottomColor: themeColors.highlight1,
        zIndex: "1"
      },
      headerTextInactive: {
        backgroundColor: themeColors.darkBg,
        border: borderTransparent,
        borderBottomColor: themeColors.transparent,
        zIndex: "0",
        ":hover": {
          cursor: "pointer"
        }
      },
      bodyContainer: {},
      bodyActive: {
        display: "block",
        border: border2
      },
      bodyInactive: {
        display: "none"
      }
    },

    // Text
    text: {
      span: {
        fontSize: fontSizeNormal
      },
      p: {
        fontSize: fontSizeNormal
      },
      strong: {
        fontSize: fontSizeNormal,
        fontWeight: fontWeights.semiBold
      }
    }
  };

  return themeConfig;
};
