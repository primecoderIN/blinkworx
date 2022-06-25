import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  HANDLE_ORDER,
  HANDLE_ORDER_DESCRIPTION,
  SAVE_USER_SCREEN_ORDER_DATA,
} from "../actions/user-context";
import AppReducer from "../reducers/UserReducer";
import { useAuthContext } from "./AuthContext";

const initialState = {
  orders: [],
  newOrder: {
    orderDescription: "",
    itemTypes: [
      {
        id: 1,
        itemTypeName: "Electronics",
      },
      {
        id: 2,
        itemTypeName: "Groceries",
      },
    ],
    allItems: [],
  },
};

const UserContext = createContext();
export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const { axiosRequests } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const handleCreatedOrder = (id, entry) => {
    dispatch({ type: HANDLE_ORDER, payload: { id, entry } });
  };

  useEffect(() => {
    if (location.pathname === "/orders") {
      axiosRequests
        .get("/orders")
        .then(({ data: { allOrders } }) =>
          dispatch({ type: SAVE_USER_SCREEN_ORDER_DATA, payload: allOrders })
        )
        .catch((err) => console.log(err));
    }
  }, [location.pathname]);

  const handleOrderDescription = (e) => {
    dispatch({ type: HANDLE_ORDER_DESCRIPTION, payload: e.target.value });
  };

  const createOrder = useCallback(() => {
    axiosRequests
      .post("/orders", state.newOrder)
      .then((res) => {
        if (res.status === 201) {
          navigate("/orders");
        }
      })
      .catch((err) => console.log(err));
  }, [state.newOrder, axiosRequests]);

  return (
    <UserContext.Provider
      value={{
        ...state,
        createOrder,
        handleCreatedOrder,
        handleOrderDescription,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
