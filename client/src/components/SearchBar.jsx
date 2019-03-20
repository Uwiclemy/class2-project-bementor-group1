import React, { Component } from "react";
import PropTypes from "prop-types";
import "../assets/css/search-bar.css";

class SearchBar extends Component {
  propTypes = {
    onSearch: PropTypes.func.isRequired
  };

  handleSubmit = event => {
    event.preventDefault();
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
