import React from "react";
import "./index.css";
import edtwist from "./logoedtwist.png";

export class NavComponent extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <div className="Navbar">
            <div className="Navbar__Link Navbar__Link-brand">
              <img src={edtwist} alt="Logo" className="home-logo" />
            </div>
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
              <div class="Navbar__Link">
                <span>
                  <i className="fa fa-bolt"></i>
                </span>
              </div>
              <div class="Navbar__Link">
                <span>
                  <span class="circular">
                    <i className="fa fa-plus"></i>
                  </span>
                </span>
              </div>
              <div class="Navbar__Link">
                <span>
                  <span class="circular black-bg">
                    <span class="item">F</span>
                  </span>
                </span>
              </div>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default NavComponent;
