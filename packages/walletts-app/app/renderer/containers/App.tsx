import * as React from "react";
import Sidebar from "./Sidebar";
import * as typestyle from "typestyle";
import * as CSS from "csstips";
const appStyle = typestyle.style(CSS.flexRoot);

const App: React.SFC = props => {
  return (
    <div className={appStyle}>
      <Sidebar />
      <div>{props.children}</div>
    </div>
  );
};

export default App;
