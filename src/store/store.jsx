import { createContext, useContext, useReducer } from "react";
import { AUTH_LOGOUT, AUTH_SUCCESS } from "./types";

const initialState = {
  token: null,
};

const StoreContext = createContext(initialState);
export const useStore = () => useContext(StoreContext);

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, { type, payload }) => {
    switch (type) {
      case AUTH_SUCCESS:
        return { ...state, token: payload };
      case AUTH_LOGOUT:
        return { ...state, token: null };
      default:
        return state;
    }
  }, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
