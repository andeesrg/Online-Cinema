import * as core from "./core";
import "./components";
import { appRoutes } from "./constants/appRoutes";
import { authService } from "./services/Auth";
import { eventBus } from "./core";
import { appEvents } from "./constants/appEvents";
import "./auth/PrivateRoute";

export class App extends core.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      isLogged: false,
      error: "",
    };
  }

  toggleIsLoading() {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    });
  }

  getUser() {
    this.toggleIsLoading();
    authService
      .init()
      .then((user) => {
        authService.user = user;
        this.setState((state) => {
          return {
            ...state,
            isLogged: Boolean(user),
          };
        });
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
  }

  onSignOut = () => {
    this.toggleIsLoading();
    authService
      .signOut()
      .then(() => {
        this.setState((state) => {
          return {
            ...state,
            isLogged: false,
          };
        });
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

  setIsAuthorized = () => {
    this.setState((state) => {
      return {
        ...state,
        isLogged: true,
      };
    });
  };

  componentDidMount() {
    this.getUser();
    eventBus.on(appEvents.userAuthorized, this.setIsAuthorized);
    eventBus.on(appEvents.userLoggedOut, this.onSignOut);
  }

  componentWillUnmount() {
    eventBus.off(appEvents.userAuthorized, this.setIsAuthorized);
    eventBus.off(appEvents.userLoggedOut, this.onSignOut);
  }

  render() {
    return this.state.isLoading
      ? `<it-preloader is-loading="${this.state.isLoading}"></it-preloader>`
      : `
      <div id="shell">
        <it-router>
            <it-header is-logged="${this.state.isLogged}"></it-header>
            <sub-navigation></sub-navigation>
              <main id="main">
                <it-route path="${appRoutes.home}" component="home-page" title="Home Page"></it-route>
                <private-route path="${appRoutes.admin}" component="admin-page" title="Admin Page"></private-route>
                <it-route path="${appRoutes.signIn}" component="sign-in-page" title="SignIn Page"></it-route>
                <it-route path="${appRoutes.signUp}" component="sign-up-page" title="SignUp Page"></it-route>
                <it-route path="${appRoutes.movies}/:id" component="movie-details-page" title="Movie Details Page"></it-route>
                <it-route path="${appRoutes.errorPage}" component="error-page" title="Not Found Page"></it-route>
                <it-outlet></it-outlet>
              </main>
            <it-footer></it-footer>
        </it-router>
      </div>
      `;
  }
}

customElements.define("my-app", App);
