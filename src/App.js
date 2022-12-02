import * as core from "./core";
import './components'
import { movieService } from "./services/MovieService";

export class App extends core.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      searchValue: '',
      selectedCategory: ''
    }
  }

  getMovies() {
    movieService.getAllMovies()
    .then(({ data }) => {
      this.setState((state) => {
        return {
          ...state,
          movies: data
        }
      })
    })
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return (
      `
        <div id="shell">
          <it-router>
            <nav>
              <ul>
                <li>
                  <it-link to="/">Home</it-link>
                <li>
                <li>
                  <it-link to="/admin">Admin</it-link>
                <li>
              </ul>
            </nav>
            <it-route path="/" component="home-page" title="Home Page"></it-route>
            <it-route path="/admin" component="admin-page" title="Admin Page"></it-route>
            <it-route path="/movies/:id" component="movie-page" title="Movie Detail Page"></it-route>
            <it-route path="*" component="error-page" title="Not Found Page"></it-route>
            <it-outlet></it-outlet>
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
