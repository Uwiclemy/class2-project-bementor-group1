import React, { Component } from "react";
import MainHeader from "./MainHeader";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import { findMentors } from "../api/mentors";

class Mentors extends Component {
  render() {
    return (
      <div>
        <MainHeader />
        <SearchBar onSearch={this.search} />
        <Footer />
      </div>
    );
  }
}
export default Mentors;
