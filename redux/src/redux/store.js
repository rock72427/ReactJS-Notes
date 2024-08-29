// import legacy_createStore from redux to create a store
import { legacy_createStore, combineReducers } from "redux";

// importing all reducers
import countReducer from "./reducers/countReducer";
import colorReducer from "./reducers/colorReducer";

// combine them using combineReducers() function
const rootReducer = combineReducers({ countReducer, colorReducer });

// create the store variable with all reducers
const store = legacy_createStore(rootReducer);

// export the store
export default store;
