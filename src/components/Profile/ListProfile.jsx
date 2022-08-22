import React from "react";
import { useSelector } from "react-redux";

const ListProfile = ({setShowList}) => {
  const stateGlobal = useSelector((state) => state.ProfileReducer.data);
  console.log("stateGlobal", stateGlobal);
  return (
    <div>
      <button onClick={() => setShowList(false)}>CLose</button>
      <p>{stateGlobal.name}</p>
    </div>
  );
};

export default ListProfile;
