import { type Dispatch } from "@reduxjs/toolkit";

import { changeOpenSideBar } from "@/app/store/features/sidebar";

export default function focusItem(dispatch?: Dispatch) {
  if (dispatch) {
    dispatch(changeOpenSideBar(true));
  }
  const elements = document.getElementsByClassName("side-bar-option");
  elements[0].querySelector("div")?.focus();
}
