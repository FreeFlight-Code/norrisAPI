export const jokeHistoryReducer = (state = [], action) => {
  let newState = [ ...state ];
  switch (action.type) {
    case "ADD_JOKE_TO_HISTORY": {
		newState.push(action.payload)
      break;
    }
    default:
      // console.log("unknown input type to modalReducer... ", action.type);
      break;
  }
  return newState;
};
