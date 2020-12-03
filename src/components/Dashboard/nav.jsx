import React from "react";
import "./index.css";

export class NavComponent extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="Navbar">
            <div className="Navbar__Link Navbar__Link-brand" />
            <div className="Navbar__Link Navbar__Link-toggle">
              <i className="fa fa-bars" />
            </div>
            <nav className="Navbar__Items">
              <div className="Navbar__Link">
                <input type="search" placeholder="Generation Y" />
              </div>
              <div className="Navbar__Link">
                <span>Help</span>
              </div>
            </nav>
            <nav className="Navbar__Items Navbar__Items--right">
              <div class="Navbar__Link"><span>other items</span></div>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default NavComponent;
