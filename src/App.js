import { Component } from './core';
import './components/atoms/typography/Headings/H1';

export class App extends Component {
	constructor() {
		super();
	}

	render() {
		return `
         <it-h1></it-h1>
      `;
	}
}

customElements.define('it-app', App);
