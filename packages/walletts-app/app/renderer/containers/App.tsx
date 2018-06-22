import * as React from "react";
import Sidebar from "./Sidebar";

const App: React.SFC = props => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      {props.children}
    </div>
  );
};

export default App;
