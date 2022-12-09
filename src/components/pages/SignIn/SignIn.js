import { Component } from "../../../core";

export class SignInPage extends Component {
  
  render() {
    const {
      fields: { email, password },
    } = this.state;

    return `
    <it-preloader is-loading="${this.state.isLoading}">
    <form class="mt-5 registration-form">
      <div class="invalid-feedback text-center mb-3 d-block">
        ${this.state.error}
      </div>
      <it-input
        type="email"
        label="Email"
        control-name="email"
        value="${email.value}"
        is-valid="${email.isValid}"
        is-touched="${email.isTouched}"
        error-message="${email.errors?.message}"
      >
      </it-input>

      <it-input
        type="password" 
        label="Password"
        control-name="password"
        class-name="first-pass"
        value="${password.value}"
        is-valid="${password.isValid}"
        is-touched="${password.isTouched}"
        error-message="${password.errors?.message}"
      >
      </it-input>
      <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
  </it-preloader>
    `;
  }
}

customElements.define('sign-in-page', SignInPage)