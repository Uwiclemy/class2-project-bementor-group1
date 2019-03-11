import React, { Component } from "react";

const interests = [
  "First Interest",
  "Second Interest",
  "Third Interest",
  "Forth Interest",
  "Fifth Interest"
];
const listInterest = interests.map(interest => <li>{interest}</li>);

const skills = [
  "First skill",
  "Second skill",
  "Third skill",
  "Forth skill",
  "Fifth skill"
];
const listSkills = skills.map(skill => <li>{skill}</li>);

class UserProfileBody extends Component {
  render() {
    return (
      <div>
        <div className="user-intro">
          <img className="user-image" />
          <h2 className="user-name">Michiel Leyman</h2>
          <b />
          <h2 className="user-quote">I make useful things for other humans</h2>
        </div>
        <h3 className="user-title1">Campus</h3>
        <h3 className="user-title2">Becentral</h3>
        <h3 className="user-title2">Bio</h3>
        <p className="user-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          inventore incidunt impedit, atque debitis nostrum consectetur,
          dolorum, doloremque repellat cupiditate numquam enim odio iste ratione
          officia? Veritatis velit facere necessitatibus!
        </p>
        <ul className="user-interests">{listInterest}</ul>
        <ul className="user-skill">{listSkills}</ul>
      </div>
    );
  }
}
export default UserProfileBody;
