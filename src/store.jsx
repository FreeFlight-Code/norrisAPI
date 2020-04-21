import { 
  combineReducers,
  createStore
 } from "redux";
import {userReducer} from "./redux/user";
import {modalReducer} from "./redux/modal";
import {jokeHistoryReducer} from "./redux/history";

export const reducers = combineReducers({
  user: userReducer,
  history: jokeHistoryReducer,
  modal: modalReducer
});

export const store = createStore(
  reducers
);
