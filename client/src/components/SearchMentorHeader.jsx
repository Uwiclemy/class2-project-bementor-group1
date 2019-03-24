import React, { Component } from "react";

class SearchMentorHeader extends Component {
  render() {
    return (
      <div className="wraper">
        <header className="SearchMentor-header ">
          <h1 className="SearchMentor-title1">BeMentor.</h1>
        </header>
        <nav>
          <ul className="SearchMentor-nav-bar">
            <li className="SearchMentor-nav-button">INBOX</li>
            <li className="SearchMentor-nav-button">PROFILE</li>
            <li className="SearchMentor-nav-button">CONTACT</li>
            <li className="SearchMentor-nav-button">LOGIN</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default SearchMentorHeader;
