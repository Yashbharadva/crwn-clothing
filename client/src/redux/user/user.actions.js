import UserActionTypes from "./user.types";


export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
});

export const signInSuccess = user => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
});
export const signInFailure = error => ({
    type: UserActionTypes.SIGN_IN_FAILURE,
    payload: error
});

export const emailSignInStart = emailAndPassword => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
});

export const signUpStart = (userCredentials) => ({    //what is userCredentials??
    type: UserActionTypes.SIGN_UP_START,
    payload: userCredentials //in the sign-up components file we have declare the 
    //user, email, password, and display name so we are not declare the all that so we create the 
    // other variables so it is in all 4 are in one function it is userCredentials
});

export const signUpSuccess = ({ user, additionalData }) => ({ //why we add user and additional data 
    type: UserActionTypes.SIGN_UP_SUCCESS,//sign-up component and firebase utils we have add the ferm name as additional data
    payload:{user, additionalData}// so just add here this 2 paras.
});

export const signUpFailure = error => ({
    type: UserActionTypes.SIGN_UP_FAILURE,
    payload:error
});
