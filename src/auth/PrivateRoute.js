import { appRoutes } from '../constants/appRoutes';
import { Component } from '../core';
import { authService } from '../services/Auth';

export class PrivateRoute extends Component {
	constructor() {
		super();
		this.isShadow = true;
	}

	static get observedAttributes() {
		return ['path'];
	}

	componentDidMount() {
		if (!authService.user) {
			this.dispatch('change-route', {
				target: appRoutes[this.props.path ?? appRoutes.signUp],
			});
		}
	}

	render() {
		return `
         <slot></slot>
      `;
	}
}

customElements.define('private-route', PrivateRoute);
