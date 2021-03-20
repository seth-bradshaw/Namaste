import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import userReducer from "./ducks/userDuck";
import taskReducer from "./ducks/taskDuck";
import journalReducer from "./ducks/journalDuck";

export const middleware = [thunk];

export const createStoreWithMiddleware = applyMiddleware(...middleware)(
  createStore
);

export const rootReducer = combineReducers({
  user: userReducer,
  task: taskReducer,
  journal: journalReducer,
});

export const store = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
