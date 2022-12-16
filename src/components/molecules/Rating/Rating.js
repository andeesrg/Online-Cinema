import { Component } from "../../../core";
import "./rating.scss";

export class Rating extends Component {
  static get observedAttributes() {
    return ["count"];
  }

  render() {
    return `
      <div class="rating">
        <p>RATING</p>
        <div class="stars">
            <div class="stars-${this.props.count} stars-colorfull"></div>
        </div>
      </div>
    `;
  }
}

customElements.define("it-rating", Rating);
