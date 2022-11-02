import { useEffect, useReducer } from "react";
import { BOOKS } from "../constants/storageKeys";
import { bookseed } from "../seeds/bookseed";
import bookReducer from "../reducers/bookReducer";

export default function useStorageBookReducer() {
  const [storage, dispatch] = useReducer(bookReducer, bookseed, () => {
    let storageBooks;
    try {
      storageBooks = JSON.parse(window.localStorage.getItem(BOOKS)) || bookseed;
    } catch (error) {
      throw new Error(`useStorageBookReducer() error: ${error}`);
    }
    return storageBooks;
  });
  useEffect(() => {
    window.localStorage.setItem(BOOKS, JSON.stringify(storage));
  }, [storage]);
  return [storage, dispatch];
}
