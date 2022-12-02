import { Component } from "../../../core";

export class HomePage extends Component {
  render() {
    return `<h1>Home Page<h1>`;
  }
}

customElements.define('home-page', HomePage)