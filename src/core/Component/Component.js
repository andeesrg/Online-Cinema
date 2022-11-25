export class Component extends HTMLElement {
	constructor() {
		super();
		this.state = {};
		this.props = {};
	}

	//Change state
	setState(callback) {
		this.state = callback(this.state);
		this.innerHTML = this.render();
	}

	//Component invoked into DOM
	connectedCallback() {
		this.innerHTML = this.render();
		this.componentDidMount();
	}

	//Component removed from DOM and page
	disconnectedCallback() {
		this.componentWillUnmount();
	}

	//Component attributes changed
	attributeChangedCallback(name, oldValue, newValue) {
		this.componentWillUpdate(name, oldValue, newValue);
		this.props[name] = this.getAttribute(name);
	}

	//Dispatch event
	dispatch(type, props) {
		this.dispatchEvent(
			new CustomEvent(type, { detail: props, bubbles: true })
		);
	}

	//Component changed
	componentWillUpdate() {}

	//Component rendered
	render() {}

	//Component removed from DOM and page
	componentWillUnmount() {}

	//Component invoked into DOM
	componentDidMount() {}
}
