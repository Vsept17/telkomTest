import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ListRepository = () => {
  const stateGlobal = useSelector((state) => state.ProfileReducer.dataRepo);
  return (
    <div className="px-4">
      {stateGlobal &&
        stateGlobal.map((e) => {
          return (
            <div
              className="w-full border-2 border-gray-500 bg-gray-400 rounded-lg my-4 p-2"
              key={e.id}
            >
              <div className="flex flex-row gap-2 items-center">
                <a className="font-bold text-xl" href={e.html_url}>
                  {e.name}
                </a>
                <p className="text-xs">{e.visibility}</p>
              </div>
              <p className="text-xs">{e.language}</p>
            </div>
          );
        })}
    </div>
  );
};

export default ListRepository;
