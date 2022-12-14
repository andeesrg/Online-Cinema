import { Component } from "../../../core";
import "./movieCard.scss";
import '../../../core/Router/Link'
import { appRoutes } from "../../../constants/appRoutes";

export class MovieCard extends Component {
  static get observedAttributes() {
    return ["title", "poster", "comments", "rating", "description", "id"];
  }

  render() {
    return `
        <div class="movie">
          <div class="movie-image">
            <span class="play">
              <span class="name">${this.props.title}</span>
            </span>
            <it-link to="${appRoutes.movies}/${this.props.id}">
              <img src="${this.props.poster}" alt="${this.props.title}" />
            </it-link>
            </div>
            <div class="rating">
            <p>RATING</p>
            <div class="stars">
                <div class="stars-in"></div>
            </div>
          </div>
        </div>
        `;
  }
}

customElements.define("movie-card", MovieCard);
