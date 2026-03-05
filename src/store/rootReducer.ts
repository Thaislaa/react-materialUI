import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/es/storage";

import themeReducer from "./slices/themeSlice";

const rootReducer = combineReducers({
  theme: themeReducer
});

const persistConfig = {
  key: "root",
  storage
};

export const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);