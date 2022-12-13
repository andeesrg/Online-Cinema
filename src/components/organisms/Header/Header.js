import { appRoutes } from "../../../constants/appRoutes";
import * as core from "../../../core";
import "./header.scss";

export class Header extends core.Component {
  static get observedAttributes() {
    return ["is-logged"];
  }

  onSignOut = (evt) => {
    evt.preventDefault();
    if(evt.target.closest('.sign-out-link')) {
        this.dispatch('sign-out')
    }
  }

  componentDidMount() {
    this.addEventListener('click', this.onSignOut)
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.onSignOut)
  }

  render() {
    return `
        <div id="header">
            <h1 id="logo"><a href="#">MovieHunter</a></h1>
            <div id="navigation">
                <ul>
                    <li>
                        <it-link to="${appRoutes.home}">
                            <span class="active link">Home</span>
                        </it-link>
                    </li>
                    <li>
                        <it-link to="${appRoutes.admin}">
                            <span class="link">Admin</span>
                        </it-link>
                    </li>
                    <li>
                        <it-link to="${appRoutes.signIn}">
                            <span class="link">sign In</span>
                        </it-link>
                    </li>
                    <li>
                        <it-link to="${appRoutes.signUp}">
                            <span class="link">sign Up</span>
                        </it-link>
                    </li>
                    ${
                      JSON.parse(this.props["is-logged"])
                        ? `
                            <li>
                                <a href="#" class="sign-out-link">
                                    <span class="link">sign Out</span>
                                </a>
                            </li>
                    `
                        : ``
                    }
                </ul>
            </div>


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
      </div>
        `;
  }
}

customElements.define("it-header", Header);
