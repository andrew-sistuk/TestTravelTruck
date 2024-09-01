import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    filterParams: {},
  },
  reducers: {
    setFilterParams: (state, action) => {
      state.filterParams = action.payload;
    },
  },
});

export const { setFilterParams } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
