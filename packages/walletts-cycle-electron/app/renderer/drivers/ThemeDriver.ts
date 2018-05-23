import { adapt } from "@cycle/run/lib/adapt";
import { ThemeConfig } from "../interfaces";
import xs, { MemoryStream, Stream } from "xstream";
import fromEvent from "xstream/extra/fromEvent";
import { defaultTheme, isThemeConfig } from "../styles";
const ipcRenderer = require("electron").ipcRenderer;

export const createThemeDriver = () => {
  const ThemeDriver = (
    themeName$: Stream<string>
  ): MemoryStream<ThemeConfig | Error> => {
    const init$ = xs.of(defaultTheme);
    themeName$.map(name => ipcRenderer.send("loadFile", name));
    const response$ = (fromEvent(ipcRenderer, "theme-loaded") as Stream<
      any
    >).map(
      result =>
        isThemeConfig(result)
          ? result
          : new Error(
              `failed to load Theme file from ${name}, result was ${result}`
            )
    );
    return adapt(xs.merge(init$, response$));
  };

  return ThemeDriver;
};
