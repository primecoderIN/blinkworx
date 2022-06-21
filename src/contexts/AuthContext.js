import jwt_decode from "jwt-decode";
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
  HIDE_SPINNER,
  SET_IS_LOGGED_IN_FALSE,
  SET_IS_LOGGED_IN_TRUE,
  SET_LOGIN_ERROR_TYPE,
  SHOW_SPINNER,
} from "../actions/auth-context";

const initialState = {
  isLoggedIn: false,
  showSpinner: false,
  username: "",
  password: "",
  errorType: "",
  successMsg: "",
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

  const handleRegistration = async (name, email, password) => {
    if (!name || !email || !password) {
      dispatch({
        type: SET_LOGIN_ERROR_TYPE,
        payload: "All fields are mandatory",
      });
      return;
    }
    if (name && email && password) {
      dispatch({ type: SHOW_SPINNER });
      try {
        const response = await axiosRequests.post("/auth/register", {
          name,
          email,
          password,
        });
        if (response.data && response.status === 201) {
          dispatch({ type: HIDE_SPINNER });
          const token = response.data.Token;
          localStorage.setItem("Token", JSON.stringify(token));
          const { isAdmin } = jwt_decode(token);
          location.state?.from
            ? navigate(location.state.from)
            : isAdmin
            ? navigate("/AdminPanel")
            : navigate("/orders");
          dispatch({ type: SET_IS_LOGGED_IN_TRUE });
        }
      } catch (e) {
        dispatch({ type: HIDE_SPINNER });
        dispatch({ type: SET_LOGIN_ERROR_TYPE, payload: "Invalid inputs!" });
      }
    }
  };

  const handleLogin = async (email, password) => {
    if (!email || !password) {
      dispatch({
        type: SET_LOGIN_ERROR_TYPE,
        payload: "All fields are mandatory!",
      });
      return;
    }

    if (email && password) {
      dispatch({ type: SHOW_SPINNER });
      try {
        const response = await axiosRequests.post("/auth/login", {
          email,
          password,
        });
        if (response.data && response.status === 200) {
          const token = response.data.Token;
          const { isAdmin } = jwt_decode(token);
          localStorage.setItem("Token", JSON.stringify(token));
          dispatch({ type: SET_IS_LOGGED_IN_TRUE });
          location.state?.from
            ? navigate(location.state.from)
            : isAdmin
            ? navigate("/AdminPanel")
            : navigate("/orders");
        }
        dispatch({ type: HIDE_SPINNER });
      } catch (e) {
        dispatch({ type: HIDE_SPINNER });
        dispatch({
          type: SET_LOGIN_ERROR_TYPE,
          payload: "Invalid credentials!",
        });
      }
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, handleLogin, handleRegistration }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
