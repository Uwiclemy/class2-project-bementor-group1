import React from "react";
import SecondaryHeader from "./SecondaryHeader";
import Footer from "../components/Footer";
import UserProfileBody from "../components/UserProfileBody";

const UserProfile = props => {
  return (
    <div>
      <SecondaryHeader />
      <UserProfileBody />
      <Footer />
    </div>
  );
};

export default UserProfile;
