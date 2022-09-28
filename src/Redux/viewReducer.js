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

      console.log(state, "STATE");
      console.log(action, "ACTION");
    },

    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setView } = viewReducer.actions;

export default viewReducer.reducer;