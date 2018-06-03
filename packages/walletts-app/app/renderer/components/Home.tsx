import * as React from "react";
import { Link } from "react-router-dom";
import { style } from "typestyle";
import * as CSS from "csstips";
import * as csx from "csx";

const HomeStyle = style(CSS.vertical);
const h2Style = style({ fontSize: csx.rem(5) });

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div className={HomeStyle} data-tid="container">
          <h2 className={h2Style}>Home</h2>
          <Link to="/counter">to Counter</Link>
          <Link to="/account">to Account</Link>
        </div>
      </div>
    );
  }
}
