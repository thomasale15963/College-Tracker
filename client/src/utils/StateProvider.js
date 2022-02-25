import React, { createContext, useContext, useReducer } from "react";
import "../utils/reducer";

export const StateProviderContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => (
  <StateProviderContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateProviderContext.Provider>
);

export const useStateProviderValue = () => useContext(StateProviderContext);
