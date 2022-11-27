import { Component } from './core';
import './components/atoms/typography/Headings/H1';
import './components/atoms/Button/Button'

export class App extends Component {
   constructor() {
      super();
   }

   render() {
      return `
         <it-h1>
            <it-button></it-button>
         </it-h1>
      `;
   }
}

customElements.define('it-app', App);
