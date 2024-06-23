import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import {
  persistStore,
  persistReducer,
  PURGE,
  FLUSH,
  PAUSE,
  PERSIST,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import rootReducer from "./rootReducer";

const persistConfig = {
  key: process.env.NEXT_PUBLIC_TASK_MANAGER_STORAGE_PERSIST_KEY!,
  version: Number(process.env.NEXT_PUBLIC_TASK_MANAGER_STORAGE_PERSIST_VERSION),
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>;

export default store;
