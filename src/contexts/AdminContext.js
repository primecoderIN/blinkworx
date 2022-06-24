import { createContext, useContext, useReducer, useEffect } from "react";
import { SAVE_USER_SCREEN_ORDER_DATA } from "../actions/admin-context";
import AdminReducer from "../reducers/AdminReducer";
import { useAuthContext } from "./AuthContext";

const initialState = {
  orders: [],
};

const AdminContext = createContext();
export const AdminContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AdminReducer, initialState);
  const { axiosRequests } = useAuthContext();

  useEffect(() => {
    axiosRequests
      .get("/get/AllOrders")
      .then(({ data: { allOrders } }) =>
        dispatch({ type: SAVE_USER_SCREEN_ORDER_DATA, payload: allOrders })
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <AdminContext.Provider value={{ ...state }}>{children}</AdminContext.Provider>
  );
};

export const useAdminContext = () => useContext(AdminContext);
