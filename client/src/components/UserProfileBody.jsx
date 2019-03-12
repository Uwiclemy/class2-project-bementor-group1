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
      <div className="user-wrapper">
        <div className="user">
          <img className="user-image" />
          <div className="user-intro">
            <h2 className="user-name">Michiel Leyman</h2>

            <h2 className="user-quote">
              I make useful things for other humans
            </h2>
          </div>
        </div>
        <div className="user-title">
          <h3 className="user-title1">Campus</h3>
          <h3 className="user-title2">Becentral</h3>
        </div>
        <h3 className="user-title3">Bio</h3>
        <p className="user-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          inventore incidunt impedit, atque debitis nostrum consectetur,
          dolorum, doloremque repellat cupiditate numquam enim odio iste ratione
          officia? Veritatis velit facere necessitatibus! Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Voluptas inventore incidunt
          impedit, atque debitis nostrum consectetur, dolorum, doloremque
          repellat cupiditate numquam enim odio iste ratione officia? Veritatis
          velit facere necessitatibus! Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Voluptas inventore incidunt impedit, atque debitis
          nostrum consectetur, dolorum, doloremque repellat cupiditate numquam
          enim odio iste ratione officia? Veritatis velit facere necessitatibus!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          inventore incidunt impedit, atque debitis nostrum consectetur,
          dolorum, doloremque repellat cupiditate numquam enim odio iste ratione
          officia? Veritatis velit facere necessitatibus!
        </p>
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
}
export default UserProfileBody;
