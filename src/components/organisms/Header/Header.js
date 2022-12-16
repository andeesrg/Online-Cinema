import { appEvents } from "../../../constants/appEvents";
import { appRoutes } from "../../../constants/appRoutes";
import * as core from "../../../core";
import { eventBus } from "../../../core";
import "./header.scss";

export class Header extends core.Component {
  constructor() {
    super();
    this.state = {
      activePath: window.location.pathname,
    };
  }

  static get observedAttributes() {
    return ["is-logged"];
  }

  onSignOut = (evt) => {
    evt.preventDefault();
    if (evt.target.closest(".sign-out-link")) {
      eventBus.emit(appEvents.userLoggedOut);
    }
  };

  onChangeRoute = (evt) => {
    this.setState((state) => {
      return {
        ...state,
        activePath: evt.detail.target,
      };
    });
  };

  isActiveLink(path) {
    return this.state.activePath === path ? "active" : "";
  }

  componentDidMount() {
    eventBus.on(appEvents.changeRoute, this.onChangeRoute);
    this.addEventListener("click", this.onSignOut);
  }

  componentWillUnmount() {
    this.removeEventListener("click", this.onSignOut);
  }

  render() {
    return `
        <header class="header">
            <it-link to="${appRoutes.home}">
              <h1 class="logo">
                MovieHunter
              </h1>
            </it-link>
            <div class="navigation">
                <ul>
                    <li>
                        <it-link to="${appRoutes.home}">
                            <span class="link ${this.isActiveLink(appRoutes.home)}">Home</span>
                        </it-link>
                    </li>
                    ${
                      JSON.parse(this.props["is-logged"])
                        ? `
                            <li>
                                <it-link to="${appRoutes.admin}">
                                    <span class="link ${this.isActiveLink(appRoutes.admin)}">Admin</span>
                                </it-link>
                            </li>
                            <li>
                                <a href="#" class="sign-out-link">
                                    <span class="link">sign Out</span>
                                </a>
                            </li>
                    `
                        : `
                        <li>
                            <it-link to="${appRoutes.signIn}">
                                <span class="link ${this.isActiveLink(appRoutes.signIn)}">sign In</span>
                            </it-link>
                        </li>
                        <li>
                            <it-link to="${appRoutes.signUp}">
                                <span class="link ${this.isActiveLink(appRoutes.signUp)}">sign Up</span>
                            </it-link>
                        </li>
                        `
                    }
                </ul>
            </div>
      </header>
        `;
  }
}

customElements.define("it-header", Header);
