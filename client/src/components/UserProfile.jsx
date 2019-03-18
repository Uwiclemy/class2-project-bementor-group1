import React from "react";
import UserProfileHeader from "../components/UserProfileHeader";
import Footer from "../components/Footer";
import UserProfileBody from "../components/UserProfileBody";

const UserProfile = props => {
  return (
    <div>
      <UserProfileHeader />
      <UserProfileBody />
      <Footer />
    </div>
  );
};

export default UserProfile;
