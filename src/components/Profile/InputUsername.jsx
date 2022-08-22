import React, { useState, useEffect } from "react";
import { getUserData } from "../../utils/ApiData";
import { useDispatch } from "react-redux";
import { setProfileData, clearRepoData } from "../../utils/redux/action";
import github from "../../assets/github.png";

const InputUsername = ({ setShowList }) => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);

  const dispatch = useDispatch();

  const submitUser = () => {
    getUserData(username)
      .then((res) => {
        setUserData(res);
        dispatch(setProfileData(res));
        dispatch(clearRepoData([]));
        setShowList(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(userData);
  return (
    <div className="w-full flex flex-row bg-gray-600 items-center justify-center gap-5 py-5">
      <img className="w-14" src={github} alt="image" />
      <input
        placeholder="Input username github"
        className="border-2 border-blue-400 rounded-lg focus:outline-none p-2"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button
        className="bg-green-500 p-2 rounded-lg"
        onClick={() => {
          submitUser();
        }}
      >
        View User Github
      </button>
    </div>
  );
};

export default InputUsername;
