const ADD_JOKE_TO_HISTORY = "ADD_JOKE_TO_HISTORY";

export function addJokeToHistory (payload) {
  return {
    type: ADD_JOKE_TO_HISTORY,
    payload: payload
  };
}

export const jokeHistoryReducer = (state = [], action) => {
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
