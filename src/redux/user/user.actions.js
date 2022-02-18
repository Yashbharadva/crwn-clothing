import { UserActionTypes } from "./user.types";

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CUREENT_USER,
    payload: user
})