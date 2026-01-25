import { configureStore } from "@reduxjs/toolkit";
import notificationReducer from "../features/notification/notificationSlice.js"
export const store = configureStore({
  reducer : {
    notification : notificationReducer
  }
})