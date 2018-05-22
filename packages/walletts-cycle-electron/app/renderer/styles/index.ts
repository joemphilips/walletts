import * as csstips from "csstips";
import { style, classes, fontFace } from "typestyle";
import { createDefaultTheme } from "./defaultThemeVariable";
import { createThemeConfig } from "./createThemeConfig";

export const flexHorizontalGreen = style(csstips.flex);

// style which should be applied to most of the components
export namespace defaultStyle {
  export const baseStyle = style({
    color: "violet",
    background: "white",
    fontSize: "24px"
  });

  // example for composing 2 classes
  export const pageBase = classes(
    baseStyle,
    style(csstips.flex, csstips.height(100), {
      padding: "4px 10px",
      border: "solid thing lightgray",
      borderRadius: 2
    })
  );

  export const buttonStyle = style({
    padding: "4px",
    fontSize: "14px"
  });

  export const appContainerStyle = style(csstips.horizontal, {
    height: "100%",
    backgroundColor: "aquamarine"
  });

  export const font = fontFace({
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 400
  });
}

const defaultTheme = createThemeConfig(createDefaultTheme());
