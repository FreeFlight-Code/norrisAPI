import { combineReducers
  , createStore
  // , applyMiddleware
 } from "redux";
import { userReducer } from "./redux/user";
import { modalReducer } from "./redux/modal";
import { jokeHistoryReducer } from "./redux/history";

const reducers = combineReducers({
  user: userReducer,
  history: jokeHistoryReducer,
  modal: modalReducer
});

// const logger = store => next => action => {
//   console.log("action fired", action);
//   next(action);
// };

// const initialState = {};

export const store = createStore(
  reducers,
  // initialState,
  // applyMiddleware(logger)
);

store.subscribe(() => {
  console.log("store changed", store.getState());
});

// store.dispatch({ type: 'LOG_IN' })
// store.dispatch({ type: 'DISPLAY_MODAL', message: "Hello Wally World", messageType: "info"})
// store.dispatch({ type: 'DISPLAY_MODAL' })

