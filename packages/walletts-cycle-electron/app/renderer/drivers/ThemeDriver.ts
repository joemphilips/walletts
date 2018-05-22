import { adapt } from "@cycle/run/lib/adapt";
import { ThemeConfig } from "../interfaces";
import xs, { MemoryStream, Stream } from "xstream";
import fromEvent from "xstream/extra/fromEvent";
import { defaultTheme } from "../styles";
import { ipcRenderer } from "electron";
import * as util from "util";

export const createThemeDriver = () => {
  const ThemeDriver = (
    themeName$: Stream<string>
  ): MemoryStream<ThemeConfig> => {
    const init$ = xs.of(defaultTheme);
    themeName$.map(name => ipcRenderer.send("loadFile", name));
    const response$ = fromEvent(ipcRenderer, "theme-loaded") as Stream<
      ThemeConfig
    >;
    return adapt(xs.merge(init$, response$));
  };

  return ThemeDriver;
};
