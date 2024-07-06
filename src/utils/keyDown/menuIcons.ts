import { type Dispatch } from "@reduxjs/toolkit";

import { changeOpenSideBar, focusItem } from "@/app/store/features/sidebar";
import { focusCarousel } from "@/app/store/features/carousel";

let positionX = 0;

export default function menuIcons(
  event: any,
  dispath: Dispatch,
  url: string | undefined
) {
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
      if (url == "/" || url == "/tv") {
        const contentGenres = document.getElementById("content-genres");
        dispath(changeOpenSideBar(false))
        setTimeout(() => {
          contentGenres?.querySelector("button")?.focus();
        }, 50);

      }
      if (url?.includes("movies/") || url?.includes("tv/")) {
        document
          .getElementById("content-buttons-movie")
          ?.querySelector("button")
          ?.focus();
        dispath(changeOpenSideBar(false));
      }
      break;
    case "Backspace":
      dispath(focusItem());
      break;
  }
}
