import React, { Component } from "react";
import MocUser from "./MocUser";

class UserProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: MocUser
    };
  }
  renderUser(userprofile) {
    const listInterest = userprofile.interests.map(interest => (
      <li>{interest}</li>
    ));

    const listSkills = userprofile.skills.map(skills => <li>{skills}</li>);
    return (
      <div className="user-wrapper">
        <div className="user">
          <img
            className="user-image"
            src={userprofile.profileImage}
            alt="userimage"
          />
          <div className="user-intro">
            <h2 className="user-name">
              {userprofile.firstName} {userprofile.lastName}
            </h2>

            <h2 className="user-quote">{userprofile.tagLine}</h2>
          </div>
        </div>
        <div className="user-title">
          <h3 className="user-title1">Campus</h3>
          <h3 className="user-title2">{userprofile.campus}</h3>
        </div>
        <h3 className="user-title3">Bio</h3>
        <p className="user-description">{userprofile.Bio}</p>
        <div className="user-info">
          <div className="user-interests-wraper">
            <h3 className="user-interests">Interests</h3>
            <ul className="user-interests-list">{listInterest}</ul>
          </div>
          <div className="user-skills-wraper">
            <h3 className="user-skills">Skills</h3>
            <ul className="user-skills-list">{listSkills}</ul>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { users } = this.state;

    const $userProfile = users.map(userprofile => this.renderUser(userprofile));

    return <div>{$userProfile}</div>;
  }
}

export default UserProfilePage;
