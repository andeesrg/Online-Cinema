import { Component } from './core';
import { movieService } from './services/MovieService';
import './components';

export class App extends Component {
	constructor() {
		super();
		this.state = {
			movieCards: [],
		};
	}

	componentDidMount() {
		this.getMovies();
	}

	getMovies() {
		movieService.getAllMovies().then(({ data }) => {
			this.setState((state) => ({
				...state,
				movieCards: data,
			}));
		});
	}

	render() {
		return `
         <div id="shell">
            <it-header></it-header>
            <div class="box">
               ${this.state.movieCards
						.map(
							(movie) =>
								`<it-movie-card
                           title="${movie.title}"
                           rating="${movie.rating}"
                           poster="${movie.poster}"
                           comments="${movie.comments}"
                        >
                        </it-movie-card>`
						)
						.join('')}
            </div>
        </div>
      `;
	}
}

customElements.define('it-app', App);
