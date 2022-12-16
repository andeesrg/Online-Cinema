import { appRoutes } from "../../../constants/appRoutes";
import * as core from "../../../core";
import "./movieCard.scss";
import "../../molecules";

export class MovieCard extends core.Component {
  static get observedAttributes() {
    return ["title", "poster", "description", "id", "rating", "genre"];
  }

  render() {
    return `
        <div class="movie">
            <div class="movie-image">
            <span class="play"><span class="name">${this.props.title}</span></span>
            <it-link to="${appRoutes.movies}/${this.props.id}">
              <img src="${this.props.poster}" alt="${this.props.title}" />
            </it-link>
            </div>
            <it-rating count="${this.props.rating}"></it-rating>
        </div>
        `;
  }
}

customElements.define("movie-card", MovieCard);
