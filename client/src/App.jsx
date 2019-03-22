import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { getMentors } from "./api/mentors";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import Mentors from "./components/Mentors";

class App extends Component {
  componentDidMount() {
    getMentors().then(modules => {
      console.log(modules);
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/:path(|index|home|start)" component={Home} />
          <Route path="/user" component={UserProfile} />
          <Route path="/search" component={Mentors} />
          <Route render={() => <p>Page not found</p>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
