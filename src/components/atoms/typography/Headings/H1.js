import { Component } from '../../../../core';

export class H1 extends Component {
	constructor() {
		super();
		this.isShadow = true;
	}

	render() {
		return `
         <div>
				 		<h1>Hello from H1.js</h1>
            <slot></slot>
         </div>
      `;
	}
}

customElements.define('it-h1', H1);
