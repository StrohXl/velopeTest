import { createSlice } from "@reduxjs/toolkit";

export const genres = createSlice({
  name: "genres",
  initialState: {
    id: 0,
    name: "",
  },
  reducers: {
    changeGenres(state, value) {
      state.id = value.payload.id;
      state.name = value.payload.name;
    },
  },
});

export const { changeGenres } = genres.actions;
export default genres.reducer;
