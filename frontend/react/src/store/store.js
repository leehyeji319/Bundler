// store Import
import { legacy_createStore as createStore } from "redux";

// rootReducer Import
import rootReducer from "store/reducers/rootReducer";

const store = createStore(rootReducer);

export default store;
