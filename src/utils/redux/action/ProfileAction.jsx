import * as actions from "./ActionTypes";

export const setProfileData = (payload) => {
    return {
        type: actions.GET_PROFILE,
        payload,
    }
}