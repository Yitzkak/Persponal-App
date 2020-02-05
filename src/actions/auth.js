import { myFirebase } from "../firebase/firebase";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export const VERIFY_SUCCESS = "VERIFY_SUCCESS";

const requestLogin = () => {
  return {
    type: LOGIN_REQUEST
  };
};

const receiveLogin = user => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};

const LoginError = () => {
  return {
    type: LOGIN_FAILURE
  };
};

const requestLogout = () => {
  return {
    type: LOGOUT_REQUEST
  };
};

const receiveLogout = user => {
  return {
    type: LOGOUT_SUCCESS,
    user
  };
};

const LogoutError = () => {
  return {
    type: LOGOUT_FAILURE
  };
};

const verifySuccess = () => {
  return {
    type: VERIFY_REQUEST
  };
};

const verifyRequest = () => {
  return {
    type: VERIFY_SUCCESS
  };
};

export const loginUser = (email, password) => dispatch => {
  dispatch(requestLogin());

  myFirebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch(receiveLogin(user));
    })
    .catch(error => {
      dispatch(LoginError());
    });
};

export const logoutUser = () => dispatch => {
  dispatch(requestLogout());

  myFirebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(receiveLogout());
    })
    .catch(error => {
      dispatch(LogoutError());
    });
};

export const verifyAuth = () => dispatch => {
  dispatch(verifyRequest());

  myFirebase.auth().onAuthStateChanged(user => {
    if (user !== null) {
      dispatch(requestLogin(user));
    }
    dispatch(verifySuccess());
  });
};