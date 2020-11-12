import React, { useReducer } from "react";

import AppContext from "./index";
import reducer from "./reducer";
import initialState from "./initialState";
import { IProviderProps } from "../types/context";

const AppProvider = (props: IProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
