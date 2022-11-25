export class Component extends HTMLElement {
	constructor() {
		super();
		this.state = {};
		this.props = {};
	}

	setState(callback) {
		this.state = callback(this.state);
		this.innerHTML = this.render()
			.trim()
			.replaceAll(/true|false/gi, '')
			.replaceAll(',', '');
	}

	connectedCallback() {
		this.innerHTML = this.render()
			.trim()
			.replaceAll(/true|false/gi, '')
			.replaceAll(',', '');
		this.componentDidMount();
		this.registerEvents();
	}

	disconnectedCallback() {
		this.componentWillUnmount();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		this.componentWillUpdate(name, oldValue, newValue);
		this.getAttributeNames.forEach(() => {
			this.props[name] = this.getAttribute(name);
		});
	}

	dispatch(type, props) {
		this.dispatchEvent(
			new CustomEvent(type, { detail: props, bubbles: true })
		);
	}

	componentWillUpdate() {}

	render() {}

	componentWillUnmount() {}

	registerEvents() {}

	componentDidMount() {}
}
