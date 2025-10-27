import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    history: "All Time",
    sites: "All Sites",
  },
  reducers: {
    setHistory: (state, action) => {
      state.history = action.payload;
    },
    setSites: (state, action) => {
      state.sites = action.payload;
    },
  },
});

export const { setHistory, setSites } = filtersSlice.actions;
export default filtersSlice.reducer;
