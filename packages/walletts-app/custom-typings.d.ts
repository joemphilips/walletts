declare module "cycle-restart";

declare module "react-electron-web-view" {
  export interface ElectronWebviewProps {
    readonly [key: string]: any;
  }
  const ElectronWebview: any;
  export default ElectronWebview;
}

declare var Snabbdom: any; //Automaticly imported into every file

declare module "*.png";
declare module "config";
