import { type Dispatch } from "@reduxjs/toolkit";

import { focusItem } from "@/app/store/features/sidebar";

let positionX = 0;

export default function movieId(event: any, dispath: Dispatch) {
  const Buttons = document.getElementById("content-buttons-movie");

  switch (event.key) {
    case "ArrowRight":
      positionX = 1;
      Buttons?.getElementsByTagName("button")[positionX].focus();
      break;
    case "ArrowUp":
      const contentMenuIcons = document.getElementById("content-menu-icons");
      setTimeout(() => {
        contentMenuIcons?.querySelector("button")?.focus();
      }, 50);
      break;
    case "ArrowLeft":
      if (positionX == 0) {
        dispath(focusItem());
      } else {
        positionX = 0;
        Buttons?.getElementsByTagName("button")[positionX].focus();
      }
      break;
    case "Backspace":
      dispath(focusItem());
      break;
  }
}
