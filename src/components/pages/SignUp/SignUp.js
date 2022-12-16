import { Component, eventBus } from "../../../core";
import "../../molecules";
import "../../atoms";
import { initialFieldsState } from "./initialState";
import { FormManager } from "../../../core/FormManager/FormManager";
import { Validator } from "../../../core/FormManager/Validator";
import { authService } from "../../../services/Auth";
import { appRoutes } from "../../../constants/appRoutes";
import { appEvents } from "../../../constants/appEvents";

export class SignUpPage extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
      isLoading: false,
      fields: {
        ...initialFieldsState,
      },
    };

    this.form = new FormManager();
  }

  toggleIsLoading = () => {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    });
  };

  registerUser = (data) => {
    this.toggleIsLoading();
    authService
      .signUp(data.email, data.password)
      .then((user) => {
        authService.user = user;
        eventBus.emit(appEvents.changeRoute, { target: appRoutes.home });
        eventBus.emit(appEvents.userAuthorized);
      })
      .catch((error) => {
        this.setState((state) => {
          return {
            ...state,
            error: error.message,
          };
        });
      })
      .finally(() => {
        this.toggleIsLoading();
      });
  };

  validateForm = (evt) => {
    if (evt.target.closest("it-input")) {
      this.form.init(this.querySelector(".registration-form"), {
        email: [
          Validator.email("Email is not valid"),
          Validator.required("The field should not be empty"),
        ],
        password: [Validator.required("The field should not be empty")],
      });
    }
  };

  validate = (evt) => {
    this.setState((state) => {
      return {
        ...state,
        fields: {
          ...state.fields,
          ...evt.detail,
        },
      };
    });
  };

  componentDidMount() {
    this.addEventListener("click", this.validateForm);
    this.addEventListener("submit", this.form.handleSubmit(this.registerUser));
    eventBus.on(appEvents.validateControls, this.validate);
  }

  render() {
    const {
      fields: { email, password },
    } = this.state;

    return `
      <it-preloader is-loading="${this.state.isLoading}">
        <div class="mt-3">
          <h1>Sign Up</h1>
        </div>
        <form class="mt-5 registration-form">
          <div class="invalid-feedback text-center mb-3 d-block">${this.state.error}</div>
          <it-input
            type="email"
            label="Email"
            control-name="email"
            value="${email.value}"
            is-valid="${email.isValid}"
            is-touched="${email.isTouched}"
            error-message="${email.errors?.message}"
          ></it-input>

          <it-input
            type="password" 
            label="Password"
            control-name="password"
            class-name="first-pass"
            value="${password.value}"
            is-valid="${password.isValid}"
            is-touched="${password.isTouched}"
            error-message="${password.errors?.message}"
          ></it-input>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
      </it-preloader>
    
    `;
  }
}

customElements.define("sign-up-page", SignUpPage);
