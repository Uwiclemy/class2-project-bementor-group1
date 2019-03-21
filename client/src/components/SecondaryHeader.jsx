import React, { Component } from "react";

class SecondaryHeader extends Component {
  render() {
    return (
      <div className="wraper">
        <header className="secondary-header ">
          <h1 className="secondary-title1">BeMentor.</h1>
          <h2 className="secondary-title2">PROFILE</h2>
        </header>
        <nav>
          <ul className="secondary-nav-bar">
            <li className="secondary-nav-button">CONNECT</li>
            <li className="secondary-nav-button">CONTACT</li>
            <li className="secondary-nav-button">LOGIN</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SecondaryHeader;
