import { Component } from "../../../core";
import { movieService } from "../../../services/MovieService";
import '../../organisms/MovieCard'

export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  getMovies() {
    movieService.getMovies()
      .then((data) => {
        this.setState((state) => {
          return {
            ...state,
            movies: data
          }
        })
      })
  }


  componentDidMount() {
    this.getMovies()
  }

  render() {
    return `
    <div id="content">
    <div class="box">

    ${this.state.movies.length ?
        this.state.movies.map(() => (`
          <movie-card
            title=""
            poster=""
            comments=""
            rating=""
          >

          </movie-card>
        `))
        : ''
      }
      
      
    <div class="cl">&nbsp;</div>
    </div>
  </div>
    `;
  }
}

customElements.define('home-page', HomePage)