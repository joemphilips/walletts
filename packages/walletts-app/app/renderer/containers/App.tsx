import * as React from "react";
import Sidebar from "./Sidebar";
import * as TS from "typestyle";
import * as CSS from "csstips";

const appStyle = TS.style(CSS.horizontal, {
  $nest: { "&>*": { height: "100vh" } }
});
const childrenStyle = TS.style(CSS.flex, {
  $nest: { "&>*": { height: "100vh" } }
});

const App: React.SFC = props => {
  return (
    <div className={appStyle}>
      <Sidebar />
      <div className={childrenStyle}>{props.children}</div>
    </div>
  );
};

export default App;
