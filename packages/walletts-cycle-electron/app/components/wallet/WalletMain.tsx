import { style, classes } from "typestyle";

// style which should be applied to most of the components
export namespace defaultStyle {
  export const baseStyle = style({
    color: "violet",
    background: "white",
    fontSize: "24px"
  });

  // example for composing 2 classes
  export const containerBase = classes(
    baseStyle,
    style({
      display: "flex",
      margin: "5%",
      padding: "4px 10px",
      border: "solid thing lightgray",
      borderRadius: 2
    })
  );
}
