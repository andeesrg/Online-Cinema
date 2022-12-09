import * as core from './core';
import './components';
import { appRoutes } from './constants/appRoutes';
import { authService } from './services/Auth';
import './auth';

export class App extends core.Component {
	constructor() {
		super();
		this.state = {
			error: '',
			isLoading: false,
			isLogged: false,
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

	onSignOut() {
		this.toggleIsLoading()
		authService
			.signOut()
			.then(() => {
				this.setState((state) => {
					return {
						...state,
						isLogged: false,
					};
				});
			})
			.finally(() => {
				this.toggleIsLoading()
			})
	}

	getUser() {
		authService
			.init()
			.then((user) => {
				authService.user = user;
				this.setState((state) => {
					return {
						...state,
						isLogged: Boolean(user),
					};
				});
			})
			.catch((err) => {
				this.setState((state) => {
					return {
						...state,
						error: err,
					};
				});
			})
			.finally(() => {
				this.toggleIsLoading();
			});
	}

	onUserCreate() {
		this.toggleIsLoading()
		this.getUser()
	}

	componentDidMount() {
		this.toggleIsLoading();
		this.getUser();
		this.addEventListener('sign-out', this.onSignOut);
		this.addEventListener('user-created', this.onUserCreate)
	}

	render() {
		return `
		${this.state.isLoading
				? `
			<it-preloader is-loading="${this.state.isLoading}"></it-preloader>

		`
				: `
		<div id="shell">
         <it-router>
				<it-header is-logged="${this.state.isLogged}"></it-header>
				<main id="main">
				<it-route path="${appRoutes.home}" component="home-page" title="Home Page"></it-route>
				<it-route path="${appRoutes.admin}" component="admin-page" title="Admin Page"></it-route>
				<it-route path="${appRoutes.signIn}" component="sign-in-page" title="SignIn Page"></it-route>
				<it-route path="${appRoutes.signUp}" component="sign-up-page" title="SignUp Page"></it-route>
				<it-route path="${appRoutes.movieDetails}/:id" component="movie-details-page" title="Movie Details Page"></it-route>
				<it-route path="${appRoutes.errorPage}" component="error-page" title="Not Found Page"></it-route>
				<it-outlet></it-outlet>
				</main>
				<it-footer></it-footer>
         </it-router>
      </div>
		`
			}
      `;
	}
}

customElements.define('my-app', App);

{
	/* <it-header></it-header>
${this.state.movies.map(({ id, title, poster, rating, comments }) => {
  return `
	 <movie-card 
		id="${id}"
		title="${title}"
		poster="${poster}"
		rating="${rating}"
		comments='${JSON.stringify(comments)}'
	 ></movie-card>
  `
}).join(' ')} */
}
