import { Component } from "../../../core";

export class AdminPage extends Component {
  render() {
    return `<h1>Admin Page<h1>`;
  }
}

customElements.define('admin-page', AdminPage)