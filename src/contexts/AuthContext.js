import {
  createContext,
  useContext,
  useReducer,
  useCallback,
  useEffect,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AuthReducer from "../reducers/AuthReducer";
import { create } from "axios";
import {
  HIDE_SPINNER_AFTER_LOGIN_REQUEST,
  SET_IS_LOGGED_IN_FALSE,
  SET_IS_LOGGED_IN_TRUE,
  SET_LOGIN_ERROR_TYPE,
  SHOW_SPINNER_ON_LOGIN_REQUEST,
} from "../actions/auth-context";

const initialState = {
  isLoggedIn: false,
  showSpinnerOnLogin: false,
  username: "",
  password: "",
  errorType: "",
};

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const userToken = localStorage.getItem("Token");
    userToken && JSON.parse(userToken)
      ? dispatch({ type: SET_IS_LOGGED_IN_TRUE })
      : dispatch({ type: SET_IS_LOGGED_IN_FALSE });
  }, [state.isLoggedIn]);

  const logout = () => {
    dispatch({ type: SET_IS_LOGGED_IN_FALSE });
    localStorage.removeItem("Token");
    navigate("/Account/Login", { state: { from: location } });
  };

  const axiosInstance = create({
    baseURL: "https://primecoderapi.herokuapp.com/api/v1",
    headers: { "Content-Type": "application/json" },
  });

  const axiosRequests = useCallback(axiosInstance, [axiosInstance]);

  axiosRequests.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("Token");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${JSON.parse(accessToken)}`;
    }
    return config;
  });

  axiosRequests.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        logout();
      }
      return Promise.reject(error);
    }
  );

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!state.username && state.password) {
      dispatch({ type: SET_LOGIN_ERROR_TYPE, payload: "username" });
    }

    if (!state.password && state.username) {
      dispatch({ type: SET_LOGIN_ERROR_TYPE, payload: "password" });
    }

    if (!state.username && !state.password) {
      dispatch({ type: SET_LOGIN_ERROR_TYPE, payload: "noInput" });
    }

    if (state.username && state.password) {
      dispatch({ type: SHOW_SPINNER_ON_LOGIN_REQUEST });
      try {
        const response = await axiosRequests.post("/login", {
          username: state.username,
          password: state.password,
        });
        if (response.data && response.status === 200) {
          localStorage.setItem(
            "Token",
            JSON.stringify(response.data.JwtAuthenticationToken.Token)
          );
          dispatch({ type: HIDE_SPINNER_AFTER_LOGIN_REQUEST });
          location.state?.from
            ? navigate(location.state.from)
            : navigate("/Dashboard");
          dispatch({ type: SET_IS_LOGGED_IN_TRUE });
          //   setErrorType("");
        }
      } catch (e) {
        dispatch({ type: HIDE_SPINNER_AFTER_LOGIN_REQUEST });
        dispatch({ type: SET_LOGIN_ERROR_TYPE, payload: "wrongInput" });
        // setPassword("");
      }
    }
  };

  return (
    <AuthContext.Provider value={{ ...state }}>{children}</AuthContext.Provider>
  );
};

export const useAppContext = () => useContext(AuthContext);
