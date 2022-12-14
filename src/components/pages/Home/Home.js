import { Component } from "../../../core";
import { movieService } from "../../../services/MovieService";
import '../../organisms/MovieCard'
import '../../atoms/Preloader'

export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      movies: []
    }
  }

  toggleIsLoading = () => {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    });
  };

  getMovies() {
    this.toggleIsLoading()
    movieService.getMovies()
      .then((data) => {
        this.setState((state) => {
          return {
            ...state,
            movies: data
          }
        })
      })
      .finally(() => {
        this.toggleIsLoading()
      })
  }


  componentDidMount() {
    this.getMovies()
  }

  render() {
    return `
    <it-preloader is-loading="${this.state.isLoading}">
      <div id="content">
        <div class="box">
        ${this.state.movies.length ?
        this.state.movies.map(({ title, genre, poster, rating, description, id }) => (`
              <movie-card
                title="${title}"
                poster="${poster}"
                rating="${rating}"
                genre="${genre}"
                id="${id}"
                description="${description}"
              >
              </movie-card>
            `)).join('')
        : '<h1>No movies found</h1>'
      }
            <div class="cl">&nbsp;</div>
        </div>
      </div>
    </it-preloader>
    `;
  }
}

customElements.define('home-page', HomePage)