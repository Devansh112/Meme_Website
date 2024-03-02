import { createSlice } from "@reduxjs/toolkit";

const aboutSlice = createSlice({
  name: "aboutEnable",
  initialState: { aboutEnable: false },
  reducers: {
    toggleAbout(state) {
      state.aboutEnable = !state?.aboutEnable;
    },
    default(state) {
      return state;
    },
  },
});

export const { toggleAbout } = aboutSlice.actions;
export const aboutReducer = aboutSlice.reducer;
