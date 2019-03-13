import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import UserProfileBody from "../components/UserProfileBody";

const UserProfile = props => {
  return (
    <div>
      <Header />
      <UserProfileBody />
      <Footer />
    </div>
  );
};

export default UserProfile;