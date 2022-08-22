import React, { useState, useEffect } from "react";
import InputUsername from "./InputUsername";
import ListProfile from "./ListProfile";

const Profile = () => {
  const [showList, setShowList] = useState(false);
  return (
    <div className="w-full flex flex-row justify-center items-center">
      <InputUsername setShowList={setShowList} />
      {showList === true ? <ListProfile setShowList={setShowList} /> : ""}
    </div>
  );
};

export default Profile;
