"use client";

import { createSlice } from "@reduxjs/toolkit";

export const country = createSlice({
  name: "countrySelect",
  initialState: {
    currentCountry: "0",
  },
  reducers: {
    setCurrentCountry: (state, action) => {
      state.currentCountry = action.payload;
    },
  },
});

export const { setCurrentCountry } = country.actions;
export default country.reducer;
