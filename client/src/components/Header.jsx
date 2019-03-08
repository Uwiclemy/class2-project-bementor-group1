import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="title">BeMentor.</h1>
        </header>

        <nav>
          <ul className="nav-bar">
            <li className="nav-button">CONNECT</li>
            <li className="nav-button">CONTACT</li>
            <li className="nav-button">LOGIN</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
