import { combineReducers } from "redux";
import listingsReducer from "./listings";
import authReducer from "./auth";

export default combineReducers({
    listings: listingsReducer,
    auth: authReducer
});
