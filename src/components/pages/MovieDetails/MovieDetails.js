import { Component } from "../../../core";

export class MovieDetailsPage extends Component {
  render() {
    return `<h1>MovieDetails Page<h1>`;
  }
}

customElements.define('movie-details-page', MovieDetailsPage)