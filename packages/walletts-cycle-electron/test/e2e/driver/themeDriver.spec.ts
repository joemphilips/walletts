import { createThemeDriver } from "../../../app/renderer/drivers/ThemeDriver";
import xs from "xstream";
import { setup } from "@cycle/run";

const sleep = (msec: number) =>
  new Promise(resolve => setTimeout(resolve, msec));

describe("createThemeDriver", () => {
  const main = (_: any) => {
    return {
      theme: xs.of("defaultTheme")
    };
  };

  it("be a function", () => {
    expect(typeof createThemeDriver).toBe("function");
  });

  it("should load example Theme", async () => {
    const driver = createThemeDriver();
    const { run, sources } = setup(main, { theme: driver });

    sources.theme.addListener({
      next: (res: any) => {
        throw new Error(`result from themeDriver was ${res}`);
      },
      error: (e: Error) => {
        throw e;
      },
      complete: () => {
        throw new Error("should not complete");
      }
    });

    run();
    await sleep(100);
  });
});
