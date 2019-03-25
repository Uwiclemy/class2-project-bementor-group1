import React, { Component } from "react";

class MainHeader extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="title">BeMentor.</h1>
        </header>

        <nav>
          <ul className="nav-bar">
            <li className="nav-button">Home</li>
            <li className="nav-button">Contact</li>
            <li className="nav-button">Search Mentor</li>
            <li className="nav-button">Login</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default MainHeader;
