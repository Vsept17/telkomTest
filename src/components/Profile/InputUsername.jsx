import React, { useState, useEffect } from "react";
import { getUserData } from "../../utils/ApiData";
import { useDispatch } from "react-redux";
import { setProfileData } from "../../utils/redux/action";

const InputUsername = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);
  
  const dispatch = useDispatch();

  const submitUser = () => {
    getUserData(username)
      .then((res) => {
        setUserData(res);
        dispatch(setProfileData({res}));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(userData);
  return (
    <div>
      <div className="w-full flex flex-row gap-5">
        <input
          placeholder="Input your username"
          className="outline-1 border-blue-400"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <button
          className="bg-green-500 p-2 rounded-lg"
          onClick={() => {
            submitUser();
          }}
        >
          VIEW YOUR ACCOUNT
        </button>
      </div>
    </div>
  );
};

export default InputUsername;
