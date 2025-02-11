import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "@/slices/user";

const rootReducer = combineReducers({
  users: userReducer,
});

export default rootReducer;
