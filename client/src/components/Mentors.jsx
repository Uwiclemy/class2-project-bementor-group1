import React, { Component } from "react";
import SecondaryHeader from "./SecondaryHeader";
import SearchBar from "../components/SearchBar";
//import MainHeader from "./MainHeader";
import SearchMentorHeader from "./SearchMentorHeader";
import SearchMentor from "../components/SearchMentor";
import Footer from "../components/Footer";
//import { findMentors } from "../api/mentors";

class Mentors extends Component {
  onSearch = mentors => {
    this.setState({
      mentors: mentors
    });
  };

  render() {
    return (
      <div>
        <SearchMentorHeader />
        <SearchMentor onSearch={this.onSearch} />

        <Footer />
      </div>
    );
  }
}
export default Mentors;
