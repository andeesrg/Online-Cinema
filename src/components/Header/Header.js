import { Component } from '../../core';
import './Header.scss';

export class Header extends Component {
	constructor() {
		super();
	}

	render() {
		return `

      <header id="header">
         <h1 id="logo">
            <a href="#">
               MovieHunter
            </a>
         </h1>

         <nav id="navigation">
            <ul>
               <li><a class="active" href="#">HOME</a></li>
               <li><a href="#">NEWS</a></li>
               <li><a href="#">IN THEATERS</a></li>
               <li><a href="#">COMING SOON</a></li>
               <li><a href="#">CONTACT</a></li>
               <li><a href="#">ADVERTISE</a></li>
            </ul>
         </nav>

         <div id="sub-navigation">
            <ul>
               <li><a href="#">SHOW ALL</a></li>
               <li><a href="#">LATEST TRAILERS</a></li>
               <li><a href="#">TOP RATED</a></li>
               <li><a href="#">MOST COMMENTED</a></li>
            </ul>

          <div id="search">          
          <form action="#" method="get" accept-charset="utf-8">
          <label for="search-field">SEARCH</label>
          <input
             type="text"
             name="search field"
             value="Enter search here"
             id="search-field"
             class="blink search-field"
          />
            <input type="submit" value="GO!" class="search-button" />
            </form>
          </div>

      </div>
   </header>


      `;
	}
}

customElements.define('it-header', Header);
