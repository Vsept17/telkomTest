import * as actions from "../action/ActionTypes";

const initialState = {
  data: ["test"],
};

console.log("data redux", initialState);

const ProfileReducer = (state = initialState, action) => {
  if (action.type === actions.GET_PROFILE) {
    return { ...state, data: action.payload };
  }
  //   console.log(action);
  //   switch (action.type) {
  //     case action.type === actions.GET_PROFILE:
  //     default:
  return state;
  //   }
};
export default ProfileReducer;
