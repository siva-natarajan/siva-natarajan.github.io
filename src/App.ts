import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { Footer } from './containers/Footer';

export class App {
  constructor() {
    this.render();
  }

  private render(): void {
    ReactDOM.render(React.createElement(Footer, { app: this }), document.getElementById("root"));
  }
}

new App();