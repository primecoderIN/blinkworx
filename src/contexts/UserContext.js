import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  HANDLE_CHECKBOX,
  HANDLE_ORDER,
  HANDLE_ORDER_DESCRIPTION,
  HIDE_SPINNER,
  REMOVE_UNCHECKED_ITEMS,
  SAVE_USER_SCREEN_ORDER_DATA,
  SHOW_SPINNER,
} from "../actions/user-context";
import AppReducer from "../reducers/UserReducer";
import { useAuthContext } from "./AuthContext";

const initialState = {
  isOrderLoading: false,
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
      dispatch({ type: SHOW_SPINNER });
      axiosRequests
        .get("/orders")
        .then(({ data: { allOrders } }) => {
          dispatch({ type: SAVE_USER_SCREEN_ORDER_DATA, payload: allOrders });
          dispatch({ type: HIDE_SPINNER });
        })
        .catch((err) => dispatch({ type: HIDE_SPINNER }));
    }
  }, [location.pathname]);

  const removeUncheckedItems = (Id) => {
    dispatch({ type: REMOVE_UNCHECKED_ITEMS, payload: Id });
  };

  const handleCheckbox = (typeID, typeName) => {
    dispatch({ type: HANDLE_CHECKBOX, payload: { typeID, typeName } });
  };

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
        handleCheckbox,
        removeUncheckedItems,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
