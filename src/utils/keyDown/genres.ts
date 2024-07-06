import { type Dispatch } from "@reduxjs/toolkit";

import { changeOpenSideBar, focusItem } from "@/app/store/features/sidebar";
import { focusCarousel } from "@/app/store/features/carousel";
import { changeGenres } from "@/app/store/features/genres";

let positionX = 0;

export default function contentGenres(
  event: any,
  dispath: Dispatch,
  genres: any
) {
  const content = document.getElementById("content-genres");

  switch (event.key) {
    case "ArrowRight":
      if (positionX > 4) {
        dispath(focusCarousel());
        positionX = 0;
      } else {
        positionX++;
        content?.getElementsByTagName("button")[positionX].focus();
      }

      break;
    case "ArrowLeft":
      if (positionX == 0) {
        dispath(focusItem());
        positionX = 0;
      } else {
        positionX--;
        content?.getElementsByTagName("button")[positionX].focus();
      }
      break;
    case "ArrowDown":
      dispath(focusCarousel());
      positionX = 0;
      break;
    case "ArrowUp":
      positionX = 0;
      const contentMenuIcons = document.getElementById("content-menu-icons");
      setTimeout(() => {
        contentMenuIcons?.querySelector("button")?.focus();
      }, 50);
      break;
    case "Enter":
      dispath(changeGenres({ id: genres.id, name: genres.name }));
      break;
    case "Backspace":
      dispath(focusItem());
      break;
  }
}
