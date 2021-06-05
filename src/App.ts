import * as ReactDOM from 'react-dom';
import * as React from 'react';
import topbar from './components/topbar/topbar';

export class App {
  constructor() {
    this.render();
  }

  private render(): void {
    ReactDOM.render(React.createElement(topbar, { app: this }), document.getElementById("root"));
  }
}

new App();