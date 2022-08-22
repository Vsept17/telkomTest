import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ListRepository = () => {
  const stateGlobal = useSelector((state) => state.ProfileReducer.dataRepo);
  return (
    <div className="px-4">
      {stateGlobal &&
        stateGlobal.map((e) => {
          return (
            <div className="w-full border-2 border-gray-500 bg-gray-400 rounded-lg my-4 p-2" key={e.id}>
              <p>{e.name}</p>
              <a href={e.html_url}>{e.html_url}</a>
            </div>
          );
        })}
    </div>
  );
};

export default ListRepository;
