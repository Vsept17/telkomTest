import * as actions from "./ActionTypes";

export const setProfileData = (payload) => {
    return {
        type: actions.GET_PROFILE,
        payload,
    }
}

export const setRepoData = (payload) => {
    return {
        type: actions.GET_REPO,
        payload,
    }
}
export const clearRepoData = (payload) => {
    return {
        type: actions.CLEAR_REPO,
        payload,
    }
}
