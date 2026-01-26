import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "../features/notification/notificationSlice.js"
import loaderReducer from "../features/loader/moduleSlice.js"
export const store = configureStore({
  reducer : {
    notification : notificationReducer,
    loader: loaderReducer,
  }
})