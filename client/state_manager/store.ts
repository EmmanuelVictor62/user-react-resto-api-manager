import { configureStore, ThunkAction, AnyAction } from "@reduxjs/toolkit";

import rootReducer from "./root_reducer";

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk = ThunkAction<void, RootState, unknown, AnyAction>;

export default store;
