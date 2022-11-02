export default function tabReducer(state, action) {
  switch (action.type) {
    case "NEW-TAB":
      return action.tab;
    default:
      return state;
  }
}
