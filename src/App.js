import { Component } from './core';
import './components/atoms/typography/Headings/H1';

export class App extends Component {
	constructor() {
		super();
	}

	render() {
		return `<h1>my app</h1>`;
	}
}

customElements.define('it-app', App);
