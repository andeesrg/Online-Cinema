import { Component } from "../../../core";
import { databaseService } from "../../../services/Database";
import "../../molecules";

export class MovieDetailsPage extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      movie: null,
    };
  }

  static get observedAttributes() {
    return ["id"];
  }

  toggleIsLoading() {
    this.setState((state) => {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    });
  }

  getMovie() {
    this.toggleIsLoading();
    databaseService
      .getDocument("movies", this.props.id)
      .then((data) => {
        this.setState((state) => {
          return {
            ...state,
            movie: data,
          };
        });
      })
      .finally(() => {
        this.toggleIsLoading();
      });
  }

  componentDidMount() {
    this.getMovie();
  }

  render() {
    console.log(this.state.movie);
    return `
      ${
        !this.state.movie
          ? `<it-preloader is-loading="${this.state.isLoading}"></it-preloader>`
          : `
          <div class="row mt-5">
            <div class="col-3">
              <img src="${this.state.movie.poster}" />
            </div>
            <div class="col-9">
              <table class="table table-dark table-striped">
                <tr>
                  <td>Name</td>
                  <td>${this.state.movie.title}</td>
                </tr>
                <tr>
                  <td>Genre</td>
                  <td>${this.state.movie.genre}</td>
                </tr>
                <tr>
                  <td>Rating</td>
                  <td><it-rating count="${this.state.movie.rating}"></it-rating></td>
                </tr>
              </table>
            </div>
          </div>
          <div class="mt-5">
            <p>${this.state.movie.description}</p>
          </div>
      `
      }
    `;
  }
}

customElements.define("movie-details-page", MovieDetailsPage);
