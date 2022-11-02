export default function bookReducer(state, action) {
  switch (action.type) {
    case "ADD-BOOK":
      return [
        ...state,
        { name: action.name, author: action.author, id: action.id },
      ];
    case "EDIT-BOOK":
      return state.map((book) =>
        book.id === action.id
          ? { ...book, author: action.author, name: action.name }
          : book
      );
    case "REMOVE-BOOK":
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}
