import { createSlice } from "@reduxjs/toolkit";

export const sidebar = createSlice({
  name: "sidebars",
  initialState: {
    open: false,
    position: 0,
  },
  reducers: {
    changeOpenSideBar(state, { payload }) {
      state.open = payload;
    },
    focusItem(state) {
      const elements = document.getElementsByClassName("side-bar-option");
      elements[state.position].querySelector("div")?.focus();
      state.open = true;
    },
    downPosition(state) {
      state.position < 2 && state.position++;
    },
    upPosition(state) {
      const contentMenuIcons = document.getElementById("content-menu-icons");
      state.position > 0
        ? state.position--
        : setTimeout(() => {
            contentMenuIcons?.querySelector("button")?.focus();
          }, 50);
    },
    resetPosition(state) {
      state.position = 0;
    },
  },
});

export const {
  changeOpenSideBar,
  focusItem,
  downPosition,
  upPosition,
  resetPosition,
} = sidebar.actions;
export default sidebar.reducer;
