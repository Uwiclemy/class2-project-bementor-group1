import React from "react";
import Header from "../components/Header";
//import Body from "../components/Body";
import Footer from "../components/Footer";
import UserProfile from "../components/UserProfile";

const Home = props => {
  return (
    <div>
      <Header />
      {/* <Body /> */}
      <UserProfile />
      <Footer />
    </div>
  );
};

export default Home;
