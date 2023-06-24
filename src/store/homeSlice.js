import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  url: {},
  genres: {},
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getUrl: (state, action) => {
      state.url = action.payload;
    },
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
  },
});

export const { getGenres, getUrl } = homeSlice.actions;
export default homeSlice.reducer;
