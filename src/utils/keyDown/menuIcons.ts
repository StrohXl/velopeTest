import { type Dispatch } from "@reduxjs/toolkit";

import { changeOpenSideBar, focusItem } from "@/app/store/features/sidebar";
import { focusCarousel } from "@/app/store/features/carousel";

let positionX = 0;

export default function menuIcons(event: any, dispath: Dispatch) {
  const contentMenuIcons = document.getElementById("content-menu-icons");

  switch (event.key) {
    case "ArrowRight":
      positionX = 1;
      contentMenuIcons?.getElementsByTagName("button")[positionX].focus();
      break;
    case "ArrowLeft":
      if (positionX == 0) {
        dispath(focusItem());
      } else {
        positionX = 0;
        contentMenuIcons?.getElementsByTagName("button")[positionX].focus();
      }
      break;
    case "ArrowDown":
      dispath(focusCarousel());
      dispath(changeOpenSideBar(false));
      break;
    case "Backspace":
      dispath(focusItem());
      break;
  }
}
