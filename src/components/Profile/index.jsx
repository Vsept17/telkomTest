import React, { useState, useEffect } from "react";
import InputUsername from "./InputUsername";
import ListProfile from "./ListProfile";

const Profile = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center">
      <InputUsername />
      <ListProfile />
    </div>
  );
};

export default Profile;
