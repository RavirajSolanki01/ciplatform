import { createSlice } from "@reduxjs/toolkit";

export const searchReducer = createSlice({
  name: "search",
  initialState: {
    value: "",
  },
  reducers: {
    setSearch: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setSearch } = searchReducer.actions;
export default searchReducer.reducer;
