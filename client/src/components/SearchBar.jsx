import React, { Component } from "react";

import "../assets/css/search-bar.css";
import { searchMentors } from "../api/mentors";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      searchquery: "",
      users: [],
      filterdMentor: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:4000/user")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          //mentors: json,
          users: json,
          filterdMentor: json
        });
      });
    //console.log("users value:", this.state.users[1]);
  }

  /*handleSubmit = async event => {
    event.preventDefault();
    console.log(this.state.query);

    const mentors = await searchMentors(this.state.query);
    this.props.onSearch(mentors);
    console.log("metors:", mentors);
  };*/

  handleInputChanged(event) {
    console.log("event", event.target.value);
    const searchText = event.target.value;
    this.setState({
      searchquery: searchText
    });
    //console.log("this.searchquery", this.state.searchquery);

    /*
    this.setState({
      searchquery: event.target.value
    });*/

    const mentors_profiles = this.state.users.filter(
      mentors =>
        mentors.firstName.toLowerCase().includes(searchText.toLowerCase()) |
        mentors.lastName.toLowerCase().includes(searchText.toLowerCase())
    );

    //this.setState({ users: mentors_profiles });
    this.setState({ filterdMentor: mentors_profiles });
    console.log("filteredContacts:", this.state.filteredContacts);

    console.log("mentors_profiles:", this.state.mentors_profiles);
  }

  renderSerach(searchProfile) {
    //console.log("filterdMentor: ", this.filterdMentor);
    return (
      <div className="container1" key={searchProfile._id}>
        <div>
          <img
            className="user-image1"
            src={searchProfile.img}
            alt="userimage"
          />
          <div className="mentorprofile">
            <h2 className="user-name1">
              {searchProfile.firstName} {searchProfile.lastName}
            </h2>
            <h2 className="user-quote1">{searchProfile.tagLine}</h2>
          </div>
        </div>
        {/* <div className="mentorprofile">
            <h2 className="user-name1">
              {searchProfile.firstName} {searchProfile.lastName}
            </h2>
            <h2 className="user-quote1">{searchProfile.tagLine}</h2>
          </div> */}
      </div>
    );
  }
  render() {
    const { users, filterdMentor } = this.state;
    const $searchProfile = filterdMentor.map(searchProfile =>
      this.renderSerach(searchProfile)
    );

    return (
      <div>
        <h1 className="connect">CONNECT</h1>

        <form className="app-search" onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChanged.bind(this)}
            type="text"
            placeholder="Search keyword"
          />
        </form>
        <div>{$searchProfile}</div>
      </div>
    );
  }
}

export default SearchBar;
