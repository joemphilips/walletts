// tslint:disable:ban-types
// tslint:disable
import * as Electron from 'electron';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface WebViewProps {
  readonly src: string;
  readonly autosize?: boolean;
  readonly nodeintegration?: boolean;
  readonly plugins?: boolean;
  readonly preload?: string;
  readonly httpreferrer?: string;
  readonly useragent?: string;
  readonly disablewebsecurity?: boolean;
  readonly partition?: string;
  readonly allowpopups?: boolean;
  readonly webpreferences?: string;
  readonly blinkfeatures?: string;
  readonly disableblinkfeatures?: string;
  readonly guestinstance?: string;
  readonly disableguestresize?: boolean;
}

export class WebView extends React.Component<WebViewProps> {
  private element: HTMLDivElement;

  public componentDidMount(): void {
    const container = ReactDOM.findDOMNode(this.element) as Element;
    let props = '';
    for (let prop in this.props) {
      if (prop === 'className') {
        props += `class="${this.props[prop]}" `;
      } else {
        if (typeof this.props[prop] === 'boolean') {
          props += `${prop}="${this.props[prop] ? 'on' : 'off'}" `;
        } else {
          props += `${prop}="${this.props[prop]}" `;
        }
      }
    }
    container.innerHTML = `<webview ${props} />`;
    const webview: Electron.WebviewTag = container.querySelector('webview');
    webview.addEventListener('dom-ready', w => {
      if (process.env.NODE_ENV === 'development') {
        if (!webview.isDevToolsOpened()) {
          webview.openDevTools();
        }
      }
    });
  }

  public render(): JSX.Element {
    console.log('going to render webview with ');
    console.log(this.element);

    return <div ref={w => (this.element = w)} />;
  }
}
