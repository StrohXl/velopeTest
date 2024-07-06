import { type Dispatch } from "@reduxjs/toolkit";

import {
  changeOpenSideBar,
  downPosition,
  focusItem,
  upPosition,
} from "@/app/store/features/sidebar";
import { focusCarousel } from "@/app/store/features/carousel";

export default function keyDownSideBar(
  event: any,
  dispath: Dispatch,
  url: string | undefined
) {
  switch (event.key) {
    case "ArrowDown":
      dispath(downPosition());
      dispath(focusItem());
      break;
    case "ArrowUp":
      dispath(upPosition());
      dispath(focusItem());
      break;
    case "ArrowRight":
      dispath(changeOpenSideBar(false));
      if (url == "/" || url == "/tv") {
        const contentGenres = document.getElementById("content-genres");
        setTimeout(() => {
          contentGenres?.querySelector("button")?.focus();
        }, 50);
      }
      if (url?.includes("movies/") || url?.includes("tv/")) {
        document
          .getElementById("content-buttons-movie")
          ?.querySelector("button")
          ?.focus();
      }
      break;
  }
}
