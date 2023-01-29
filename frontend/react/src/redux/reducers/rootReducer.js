// combineReducers Import
import { combineReducers } from "redux";

// eachFolder Reducer Import
import makeCardReducer from "redux/reducers/each/makeCardReducer";

const rootReducer = combineReducers({
  // State - makeCardReducer
  makeReducer: makeCardReducer,
});

export default rootReducer;
