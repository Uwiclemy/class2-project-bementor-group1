import React, { Component } from "react";

import "../assets/css/search-bar.css";
import { searchUsers } from "../api/users";

class SearchBar extends Component {
  handleSubmit = async event => {
    event.preventDefault();

    const mentors = await searchUsers(this.state.query);
    this.props.onSearch(mentors);
  };

  handleInputChanged = event => {
    this.setState({
      query: event.target.value
    });
  };

  render() {
    return (
      <form className="app-search" onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleInputChanged}
          type="text"
          placeholder="Search keyword"
        />
        <input type="submit" value="Search" />
      </form>
    );
  }
}

export default SearchBar;
