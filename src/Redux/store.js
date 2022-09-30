import { configureStore } from "@reduxjs/toolkit";
import cookieReducer from "./cookieReducer";
import viewReducer from "./viewReducer";

export const store = configureStore({
  reducer: { view: viewReducer, cookie: cookieReducer },
});
