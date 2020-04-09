import { combineReducers
  , createStore
  // , applyMiddleware
 } from "redux";
import {userReducer} from "./redux/user";
import {modalReducer} from "./redux/modal";
import {jokeHistoryReducer} from "./redux/history";

export const reducers = combineReducers({
  user: userReducer,
  history: jokeHistoryReducer,
  modal: modalReducer
});

//logs all actions dispatched
// const logger = store => next => action => {
//   console.log("action fired", action);
//   next(action);
// };

export const store = createStore(
  reducers,
  // applyMiddleware(logger)
);


//logs all updates to state
// store.subscribe(() => {
//   console.log("store changed", store.getState());
// });

