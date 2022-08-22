import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListRepo } from "../../utils/ApiData";
import { setRepoData } from "../../utils/redux/action";
import ListReposistory from "../ListReposistory";

const ListProfile = ({ setShowList }) => {
  const stateGlobal = useSelector((state) => state.ProfileReducer.data);
  const dispatch = useDispatch();

  const getListRepository = () => {
    getListRepo(stateGlobal.login)
      .then((res) => {
        dispatch(setRepoData(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log("stateGlobal", stateGlobal);
  return (
    <div className="w-full flex flex-row">
      <div className="w-3/12 p-10 bg-gray-400">
        <img
          className="rounded-full"
          src={stateGlobal.avatar_url}
          alt="image"
        />
        <p className="font-bold text-2xl">{stateGlobal.name}</p>
        <p className="text-lg">{stateGlobal.location}</p>
        <button className="w-full bg-green-400 my-5 rounded-lg py-2" onClick={() => getListRepository()}>Lihat Repository</button>

      </div>
      <div className="w-9/12">
        <ListReposistory/>
      </div>
      {/* <button onClick={() => setShowList(false)}>CLose</button> */}
    </div>
  );
};

export default ListProfile;
