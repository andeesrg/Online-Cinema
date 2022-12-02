export class Component extends HTMLElement {
  constructor() {
    super();
    this.state = {};
    this.props = {};
    this.isShadow = false
  }

  setState(callback) {
    this.state = callback(this.state);
    if(this.isShadow) {
      this.shadowRoot.innerHTML = this.render()
    } else {
      this.innerHTML = this.render()
    }
  }

  connectedCallback() {
    if(this.isShadow) {
      this.attachShadow({ mode: 'open' });
      const tml = document.createElement("template");
      tml.innerHTML = this.render()
      this.shadowRoot.append(tml.content.cloneNode(true))
    } else {
      this.innerHTML = this.render()
    }
    this.componentDidMount();
  }

  disconnectedCallback() {
    this.componentWillUnmount();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.componentWillUpdate(name, oldValue, newValue);
    this.getAttributeNames().forEach((name) => {
      this.props[name] = this.getAttribute(name);
    });
  }

  dispatch(type, props) {
    this.dispatchEvent(new CustomEvent(type, { bubbles: true, detail: props }));
  }

  componentDidMount() {}
  componentWillUnmount() {}
  componentWillUpdate() {}
  componentWillUnmount() {}
  render() {}
}
