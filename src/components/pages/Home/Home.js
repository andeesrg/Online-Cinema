import { Component } from "../../../core";
import { databaseService } from "../../../services/Database";
import "../../organisms";
import "./home.scss";

export class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      movies: {
        action: [],
        horror: [],
        drama: [],
        fantasy: [],
      },
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

  getMovies() {
    this.toggleIsLoading();
    databaseService
      .read("movies")
      .then((data) => {
        this.setState((state) => {
          return {
            ...state,
            movies: data.reduce((acc) => {
              Object.keys(this.state.movies).forEach((key) => {
                acc[key] = data.filter((movie) => movie.genre === key)
              })
              return acc
            }, {})
          };
        });
      })
      .finally(() => {
        this.toggleIsLoading();
      });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    return `
      <it-preloader is-loading="${this.state.isLoading}">
        <div id="content">
        ${Object.keys(this.state.movies).map((key) => (`
          <div class="box">
            <div class="head">
              <h2>${key}</h2>
            </div>
            <div class="home-container ">
            ${this.state.movies[key]
            .map(({ title, poster, description, rating, genre, id }) => (`
              <movie-card
                title="${title}"
                poster="${poster}"
                description="${description}"
                rating="${rating}"
                genre="${genre}"
                id="${id}"
              >
              </movie-card>
            `)).join('')} 
            </div> 
           `)).join('')}
        </div>
      </it-preloader>
    `;
  }
}

customElements.define("home-page", HomePage);