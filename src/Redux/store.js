import { configureStore } from "@reduxjs/toolkit";
import cookieReducer from "./cookieReducer";
import { searchReducer } from "./searchReducer";
import viewReducer from "./viewReducer";

export const store = configureStore({
  reducer: { view: viewReducer, cookie: cookieReducer, search: searchReducer },
});
