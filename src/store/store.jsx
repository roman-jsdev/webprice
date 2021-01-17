import { createContext, useContext, useReducer } from "react";

const initialState = {
  token: null,
};

const StoreContext = createContext(initialState);
export const useStore = () => useContext(StoreContext);

const StoreProvider = StoreContext.Provider;

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "AUTH_SUCCESS":
        return { ...state, token: action.token };
      case "AUTH_LOGOUT":
        return { ...state, token: null };
      default:
        return state;
    }
  }, initialState);

  return <StoreProvider value={{ state, dispatch }}>{children}</StoreProvider>;
};
