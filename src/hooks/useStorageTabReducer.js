import { useEffect, useReducer } from "react";
import { HOME_TAB } from "../constants/bookConstants";
import { CURRENT_TAB } from "../constants/storageKeys";
import tabReducer from "../reducers/tabReducer";

export default function useStorageTabReducer() {
  const [storage, dispatch] = useReducer(tabReducer, HOME_TAB, () => {
    let storageTab;
    try {
      storageTab =
        JSON.parse(window.localStorage.getItem(CURRENT_TAB)) || HOME_TAB;
    } catch (error) {
      throw new Error(`useStorageTabReducer() error: ${error}`);
    }
    return storageTab;
  });
  useEffect(() => {
    window.localStorage.setItem(CURRENT_TAB, JSON.stringify(storage));
  }, [storage]);
  return [storage, dispatch];
}
