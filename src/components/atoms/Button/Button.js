import { Component } from "../../../core";
import './Button.scss'

export class Button extends Component {
  constructor() {
    super()
  }

  render() {
    return `
      <button type="button" class="my-button">Click me!</button>
    `
  }
}

customElements.define('it-button', Button)