import { Component } from '../../../../core';

export class H1 extends Component {
	constructor() {
		super();
		this.isShadow = true;
	}

	render() {
		return `
         <div>
				<slot name="header">Hello from H1.js</slot>
            <slot></slot>
         </div>
      `;
	}
}

customElements.define('it-h1', H1);
