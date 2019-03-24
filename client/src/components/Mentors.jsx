import React, { Component } from "react";
import SearchMentorHeader from "./SearchMentorHeader";
import Footer from "../components/Footer";

import "../assets/css/searchMentor.css";
import SearchBar from './SearchBar';

class Mentors extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      users: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/mentor")
      .then(res => res.json())
      .then(mentors => {
        this.setState({
          isLoaded: true,
          users: mentors
        });
      });
  }

  onSearch = mentors => {
    this.setState({
      users: mentors
    });
  };


  renderProfile(searchProfile) {
    let shortAbout = searchProfile.about;
    shortAbout = shortAbout.substring(0, 20) + "...";

    return (
      <div className="container1" key={searchProfile._id}>
        <div>
          <img
            className="user-image1"
            src={"https://api.adorable.io/avatars/285"}
            alt="userimage"
          />
          <div className="mentorprofile">
            <h2 className="user-name1">
              {searchProfile.firstName} {searchProfile.lastName}
            </h2>
            <h2 className="user-quote1">{searchProfile.tagLine}</h2>
            <p>{shortAbout}</p>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { users } = this.state;
    const $searchProfile = users.map(searchProfile =>
      this.renderProfile(searchProfile)
    );

    return (
      <div>
        <SearchMentorHeader />
        <SearchBar onSearch={this.onSearch} />
        <div>{$searchProfile}</div>
        <Footer />
      </div>
    );
  }
}
export default Mentors;
