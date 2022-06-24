import { createContext, useContext, useReducer, useEffect } from "react";
import { SAVE_USER_SCREEN_ORDER_DATA } from "../actions/user-context";
import AppReducer from "../reducers/UserReducer";
import { useAuthContext } from "./AuthContext";

const initialState = {
  orders: [],
};

const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const { axiosRequests } = useAuthContext();

  useEffect(() => {
    axiosRequests
      .get("/orders")
      .then(({ data: { allOrders } }) =>
        dispatch({ type: SAVE_USER_SCREEN_ORDER_DATA, payload: allOrders })
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <UserContext.Provider value={{ ...state }}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
