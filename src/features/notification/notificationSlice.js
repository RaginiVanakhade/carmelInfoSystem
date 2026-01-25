import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  message: "",
  type: "success", // success | error | warning | info
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
    hideNotification: (state) => {
      state.open = false;
      state.message = "";
    },
  },
});

export const { showNotification, hideNotification } =
  notificationSlice.actions;

export default notificationSlice.reducer;
