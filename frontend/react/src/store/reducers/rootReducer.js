// combineReducers Import
import { combineReducers } from "redux";

// eachFolder Reducer Import
import makeCardReducer from "store/reducers/each/makeCardReducer";

const rootReducer = combineReducers({
  // State - makeCardReducer
  make: makeCardReducer,
});

export default rootReducer;
