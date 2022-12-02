import { Component } from "../../../core";
import "./footer.scss";

export class Footer extends Component {
  render() {
    return `
        <div id="footer">
            <p class="lf">
            Copyright &copy; 2010 <a href="#">SiteName</a> - All Rights Reserved
            </p>
            <p class="rf">
            Design by <a href="http://chocotemplates.com/">ChocoTemplates.com</a>
            </p>
            <div style="clear: both"></div>
        </div>
        </div>
        `;
  }
}

customElements.define('it-footer', Footer)
