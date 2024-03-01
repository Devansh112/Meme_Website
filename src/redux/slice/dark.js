import { createSlice } from "@reduxjs/toolkit";

const darkSlice = createSlice({
  name: "darkMode",
  initialState: { darkMode: true },
  reducers: {
    toggleDark(state) {
      state.darkMode = !state?.darkMode;
    },
    default(state) {
      return state;
    },
  },
});

export const { toggleDark } = darkSlice.actions;
export const darkReducer = darkSlice.reducer;
