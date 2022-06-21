import {
  HIDE_SPINNER,
  SET_IS_LOGGED_IN_FALSE,
  SET_IS_LOGGED_IN_TRUE,
  SET_LOGIN_ERROR_TYPE,
  SET_PASSWORD,
  SET_USERNAME,
  SHOW_SPINNER,
} from "../actions/auth-context";

const AuthReducer = (state, action) => {
  if (action.type === SHOW_SPINNER) {
    return { ...state, showSpinner: true };
  }
  if (action.type === HIDE_SPINNER) {
    return { ...state, showSpinner: false };
  }
  if (action.type === SET_IS_LOGGED_IN_TRUE) {
    return { ...state, isLoggedIn: true };
  }
  if (action.type === SET_IS_LOGGED_IN_FALSE) {
    return { ...state, isLoggedIn: false };
  }
  if (action.type === SET_USERNAME) {
    return { ...state, username: action.payload };
  }
  if (action.type === SET_PASSWORD) {
    return { ...state, password: action.payload };
  }
  if (action.type === SET_LOGIN_ERROR_TYPE) {
    return { ...state, errorType: action.payload };
  }

  return state;
};

export default AuthReducer;
