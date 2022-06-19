import { createContext, useContext, useReducer } from "react";
import AppReducer from "../reducers/AppReducer";

const initialState = {};

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return <AppContext.Provider value={{ ...state }}></AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
