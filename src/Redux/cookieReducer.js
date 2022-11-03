import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "open",
};

export const cookieReducer = createSlice({
  name: "cookie",
  initialState,
  reducers: {
    setCookieBtnStatus: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCookieBtnStatus } = cookieReducer.actions;

export default cookieReducer.reducer;
