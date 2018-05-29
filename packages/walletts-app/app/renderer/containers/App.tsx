import * as React from "react";
import { Menu } from "semantic-ui-react";
import { Sidebar } from "walletts-components";
import * as typestyle from "typestyle";
import * as CSS from "csstips";
const appStyle = typestyle.style(CSS.flexRoot);

export default class App extends React.Component {
  render() {
    return (
      <div className={appStyle}>
        <Sidebar as={Menu} vertical inverted>
          <Menu.Item>item1</Menu.Item>
          <Menu.Item>item2</Menu.Item>
        </Sidebar>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
