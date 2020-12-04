import React from "react";
import "./nav.css";
import edtwist from "./images/logoedtwist.png";

export class NavComponent extends React.Component {
  constructor() {
    super();
    this.navLinks = React.createRef();
  }

  menuAnimation = () => {
    this.navLinks.current.classList.toggle("Navbar__ToggleShow");
  };

  render() {
    return (
      <div>
        <header className="header">
          <div className="Navbar">
            <div className="Navbar__Link Navbar__Link-brand">
              <img src={edtwist} alt="Logo" className="home-logo" />
            </div>
            <div
              className="Navbar__Link Navbar__Link-togglenav"
              onClick={this.menuAnimation}
            >
              <i className="fa fa-bars" />
            </div>
            <nav className="Navbar__Items" ref={this.navLinks}>
              <div className="Navbar__Link">
                <input
                  type="search"
                  className="nav-search"
                  placeholder="Generation Y"
                />
              </div>
              <div className="Navbar__Link" onClick={this.menuAnimation}>
                <span>Help</span>
              </div>
            </nav>
            <nav
              className="Navbar__Items Navbar__Items--right"
              ref={this.navLinks}
            >
              <div className="Navbar__Link" onClick={this.menuAnimation}>
                <span>
                  <i className="fa fa-bolt"></i>
                </span>
              </div>
              <div className="Navbar__Link" onClick={this.menuAnimation}>
                <span>
                  <span className="circular">
                    <i className="fa fa-plus"></i>
                  </span>
                </span>
              </div>
              <div className="Navbar__Link" onClick={this.menuAnimation}>
                <span>
                  <span className="circular black-bg">
                    <span className="item">F</span>
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
