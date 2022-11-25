import { Component } from '../../../../core';

export class H1 extends Component {
	constructor() {
		super();
		this.isShadow = true;
	}

	render() {
		return `
         
      `;
	}
}

customElements.define('it-h1', H1);
