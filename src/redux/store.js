import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { darkReducer } from "./slice/dark.js";
import { aboutReducer } from "./slice/about.js";
import { memeReducer } from "./slice/meme.js";

const persistConfig = {
  key: " root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  memeData: memeReducer,
  darkMode: darkReducer,
  about : aboutReducer
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
