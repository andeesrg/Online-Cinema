import { Component } from "../../../core";
import { movieService } from "../../../services/MovieService";
import '../../atoms/Preloader';

export class MovieDetailsPage extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: false,
      movie: {},
    }
  }

  static get observedAttributes() {
    return ['id']
  }

  getMovie() {
    this.toggleIsLoading()
    movieService.getMovie(this.props.id)
      .then((movie) => {
        this.setState((state) => {
          return {
            ...state,
            movie: movie
          }
        })
      })
      .finally(() => {
        this.toggleIsLoading()
      })
  }

  toggleIsLoading() {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    });
  }

  componentDidMount() {
    this.getMovie()
  }

  render() {
    return `
      ${this.state.movie ?
        `
        <it-preloader is-loading="${this.state.isLoading}">
          <div>
            <img src="${this.state.movie.poster}"/>
            <p class="mt-2">${this.state.movie.description}</p>
            <p class="mt-2">${this.state.movie.genre}</p>
          </div>
        </it-preloader> ` : '<h2>Movie is not found</h2>'
      }
    `
  }
}

customElements.define('movie-details-page', MovieDetailsPage)