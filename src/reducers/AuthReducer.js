import {
  HIDE_SPINNER_AFTER_LOGIN_REQUEST,
  SET_IS_LOGGED_IN_FALSE,
  SET_IS_LOGGED_IN_TRUE,
  SET_LOGIN_ERROR_TYPE,
  SET_PASSWORD,
  SET_USERNAME,
  SHOW_SPINNER_ON_LOGIN_REQUEST,
} from "../actions/auth-context";

const AuthReducer = (state, action) => {
  if (action.type === SHOW_SPINNER_ON_LOGIN_REQUEST) {
    return { ...state, showLoaderOnLogin: true };
  }
  if (action.type === HIDE_SPINNER_AFTER_LOGIN_REQUEST) {
    return { ...state, showLoaderOnLogin: false };
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
