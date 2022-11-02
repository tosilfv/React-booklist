import React, { createContext } from "react";
import useStorageTabReducer from "../hooks/useStorageTabReducer";

export const TabContext = createContext();

export default function BookProvider(props) {
  const [tab, setTab] = useStorageTabReducer();
  return (
    <TabContext.Provider value={[tab, setTab]}>
      {props.children}
    </TabContext.Provider>
  );
}
