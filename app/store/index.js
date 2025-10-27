import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import filterReducer from "./slices/filtersSlice";
import notificationReducer from "./slices/notificationSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    filters: filterReducer,
    notification: notificationReducer,
  },
});