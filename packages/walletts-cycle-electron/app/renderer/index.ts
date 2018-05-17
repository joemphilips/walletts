// tslint:disable:no-if-statement
import { setup, run } from "@cycle/run";
import isolate from "@cycle/isolate";
import { restartable, rerunner } from "cycle-restart";
import * as csstips from "csstips";
csstips.normalize();

import { buildDrivers, wrapMain } from "./drivers";
import { AppContainer } from "./appContainer";

const main = wrapMain(AppContainer as any);

if (process.env.NODE_ENV === "production") {
  run(main as any, buildDrivers(([k, t]) => [k, t()]));
} else {
  const mkDrivers = () =>
    buildDrivers(([k, t]) => {
      if (k === "DOM") {
        return [k, restartable(t(), { pauseSinksWhileReplaying: false })];
      }
      if (k === "time" || k === "router") {
        return [k, t()];
      }
      return [k, restartable(t())];
    });
  const rerun = rerunner(setup, mkDrivers, isolate);
  rerun(main as any);

  if (module.hot) {
    module.hot.accept("./components/app", () => {
      const newApp = (require("./components/app") as any).App;

      rerun(wrapMain(newApp));
    });
  }
}
