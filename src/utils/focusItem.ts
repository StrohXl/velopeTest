import { type Dispatch } from "@reduxjs/toolkit";

import { changeOpenSideBar } from "@/app/store/features/sidebar";

export default function focusItem(dispatch?: Dispatch) {
  const element = document.getElementById("ButtonFocus");
  if (element) {
    element.focus();
  }
}
