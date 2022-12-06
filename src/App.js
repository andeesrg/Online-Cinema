import * as core from "./core";
import './components'
import { appRoutes } from "./constants/appRoutes";

export class App extends core.Component {


  render() {
    return (
      `
      <div id="shell">
        <it-router>
          <it-header></it-header>
              <main id="main">
                <it-route path="${appRoutes.home}" component="home-page" title="Home Page"></it-route>
                <it-route path="${appRoutes.admin}" component="admin-page" title="Admin Page"></it-route>
                <it-route path="${appRoutes.signIn}" component="sign-in-page" title="SignIn Page"></it-route>
                <it-route path="${appRoutes.signUp}" component="sign-up-page" title="SignUp Page"></it-route>
                <it-route path="${appRoutes.movieDetails}/:id" component="movie-details-page" title="Movie Details Page"></it-route>
                <it-route path="${appRoutes.errorPage}" component="error-page" title="Not Found Page"></it-route>
                <it-outlet></it-outlet>
              </main>
            <it-footer></it-footer>
          </it-router>
      </div>
      `
    )
  }
}

customElements.define("my-app", App);



{/* <it-header></it-header>
${this.state.movies.map(({ id, title, poster, rating, comments }) => {
  return `
    <movie-card 
      id="${id}"
      title="${title}"
      poster="${poster}"
      rating="${rating}"
      comments='${JSON.stringify(comments)}'
    ></movie-card>
  `
}).join(' ')} */}
