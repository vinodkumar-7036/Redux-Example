function rootReducer(state = [], action) {
  console.log("::::");
  switch (action.type) {
    case "INTIALIZED":
      return [...state, action.payload];
    default:
      return state;
  }
}

export default rootReducer;
