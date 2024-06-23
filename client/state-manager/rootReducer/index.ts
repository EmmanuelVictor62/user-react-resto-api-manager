import { combineReducers } from "@reduxjs/toolkit";

import counterSlice from "@/slices/counterSlice";

const rootReducer = combineReducers({
  counter: counterSlice,
});

export default rootReducer;
