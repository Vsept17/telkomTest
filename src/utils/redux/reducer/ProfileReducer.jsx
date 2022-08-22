import * as actions from "../action/ActionTypes";

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
    console.log(action);
  switch (action.type) {
    case action.type === actions.GET_PROFILE:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};
