import * as actions from "../action/ActionTypes";

const initialState = {
  data: [],
  dataRepo: [],
};

console.log("data redux", initialState);

const ProfileReducer = (state = initialState, action) => {
    console.log(action);
  if (action.type === actions.GET_PROFILE) {
    return { ...state, data: action.payload };
  } else if (action.type === actions.GET_REPO) {
    return { ...state, dataRepo: action.payload };
  } else if (action.type === actions.CLEAR_REPO) {
    return { ...state, dataRepo: action.payload };
  }
  //   console.log(action);
  //   switch (action.type) {
  //     case action.type === actions.GET_PROFILE:
  //     default:
  return state;
  //   }
};
export default ProfileReducer;
