// src/features/user/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "user", // Initial state for the user
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload; // Update user state
    },
    clearUser: (state) => {
      state.user = "logger"; // Clear user state
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
