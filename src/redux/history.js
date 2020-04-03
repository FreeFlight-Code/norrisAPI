const ADD_JOKE_TO_HISTORY = "ADD_JOKE_TO_HISTORY";
//#action creator
export function addJokeToHistory (payload) {
  return {
    type: ADD_JOKE_TO_HISTORY,
    payload: payload
  };
}
//#Redux #reducer
export const jokeHistoryReducer = (state = [], action) => {
  //#spread operator
  let newState = [ ...state ];
  switch (action.type) {
    case ADD_JOKE_TO_HISTORY: {
      newState.push(action.payload);
      break;
    }
    default:
      break;
  }
  return newState;
};
