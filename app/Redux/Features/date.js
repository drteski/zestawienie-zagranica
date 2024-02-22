"use client";

import { createSlice } from "@reduxjs/toolkit";
import { format } from "date-fns";

export const date = createSlice({
  name: "dataDate",
  initialState: {
    currentDate: format(new Date(), "yyyy-MM-dd"),
  },
  reducers: {
    setCurrentDate: (state, action) => {
      state.currentDate = action.payload;
    },
  },
});

export const { setCurrentDate } = date.actions;
export default date.reducer;
