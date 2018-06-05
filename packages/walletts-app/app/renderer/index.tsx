import * as React from "react";
import { render } from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Root } from "./containers/Root";
import "./app.global.scss";
import { defaultState } from "./store";
import { setupPage, normalize } from "csstips";
setupPage("#root");
normalize();

const { configureStore, history } = require("./store/configureStore");
const store = configureStore(defaultState);

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById("root")
);

if ((module as any).hot) {
  (module as any).hot.accept("./containers/Root", () => {
    const NextRoot = require("./containers/Root").default;
    render(
      <AppContainer>
        <NextRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById("root")
    );
  });
}
