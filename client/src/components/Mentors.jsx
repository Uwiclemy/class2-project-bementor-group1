import React, { Component } from "react";
import SecondaryHeader from "./SecondaryHeader";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { findMentors } from "../api/mentors";

class Mentors extends Component {
  onSearch = mentors => {
    this.setState({
      mentors: mentors
    });
  };

  render() {
    return (
      <div>
        <SecondaryHeader />
        <SearchBar onSearch={this.onSearch} />

        <Footer />
      </div>
    );
  }
}
export default Mentors;
