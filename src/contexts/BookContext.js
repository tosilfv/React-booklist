import React, { createContext } from "react";
import useStorageBookReducer from "../hooks/useStorageBookReducer";
import useStorageTabReducer from "../hooks/useStorageTabReducer";

export const BookContext = createContext();
export const DispatchContext = createContext();
export const TabContext = createContext();

export default function BookProvider(props) {
  const [books, dispatch] = useStorageBookReducer();
  const [tab, setTab] = useStorageTabReducer();
  return (
    <BookContext.Provider value={{ books }}>
      <DispatchContext.Provider value={{ dispatch }}>
        <TabContext.Provider value={[tab, setTab]}>
          {props.children}
        </TabContext.Provider>
      </DispatchContext.Provider>
    </BookContext.Provider>
  );
}
