import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "grid",
};

export const viewReducer = createSlice({
  name: "view",
  initialState,
  reducers: {
    setView: (state, action) => {
      if (action.payload === "grid") {
        state.value = action.payload;
      } else {
        state.value = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setView } = viewReducer.actions;

export default viewReducer.reducer;
