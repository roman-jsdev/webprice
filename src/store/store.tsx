import { createContext, useContext, useReducer } from "react";

import {
  IAuthState,
  IChildren,
  IAuthAction,
  IContextProps,
} from "../interfaces/defaultInterfaces";
import { AUTH_LOGOUT, AUTH_SUCCESS } from "./types";

const initialState = {
  token: null,
};

const StoreContext = createContext({} as IContextProps);
export const useStore = () => useContext(StoreContext);

export const StateProvider = ({ children }: IChildren) => {
  const [state, dispatch] = useReducer(
    (state: IAuthState, { type, payload }: IAuthAction) => {
      switch (type) {
        case AUTH_SUCCESS:
          return { ...state, token: payload };
        case AUTH_LOGOUT:
          return { ...state, token: null };
        default:
          return state;
      }
    },
    initialState
  );

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
