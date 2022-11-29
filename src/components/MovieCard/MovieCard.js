import { Component } from '../../core';
import './MovieCard.scss';

export class MovieCard extends Component {
	constructor() {
		super();
	}

	static get observedAttributes() {
		return ['title', 'poster', 'rating', 'comments'];
	}

	render() {
		console.log(this.props);
		return `
         <div class="movie">
            <div class="movie-image">
               <span class="play">
                  <span class="name">${this.props.title}</span>
               </span>
               <a href="#">
                  <img src="../../assets/images/${this.props.poster}" alt="${
			this.props.title
		}" />
               </a>
            </div>
            <div class="rating">
               <p>RATING</p>
               <div class="stars">
                  <div class="stars-in"></div>
               </div>
               <span class="comments">${this.props.comments.length ?? 0}</span>
            </div>
      </div>
      `;
	}
}
customElements.define('it-movie-card', MovieCard);
