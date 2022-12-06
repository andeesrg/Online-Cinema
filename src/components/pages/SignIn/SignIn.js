import { Component } from "../../../core";

export class SignInPage extends Component {
  render() {
    return `<h1>SignIn Page<h1>`;
  }
}

customElements.define('sign-in-page', SignInPage)