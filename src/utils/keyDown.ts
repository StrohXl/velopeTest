import { type Dispatch } from "@reduxjs/toolkit";

import keyDownCarousel from "./keyDown/carousel";
import keyDownSideBar from "./keyDown/sideBar";
import movieId from "./keyDown/movieID";
import menuIcons from "./keyDown/menuIcons";
import contentGenres from "./keyDown/genres";

export default function keyDown(
  event: any,
  id: any,
  dispatch: Dispatch,
  url?: string,
  genres?: any
) {
  switch (id) {
    case "side-bar-option":
      keyDownSideBar(event, dispatch, url);
      break;
    case "carousel-options":
      keyDownCarousel(event, dispatch);
      break;
    case "content-buttons-movie":
      movieId(event, dispatch);
      break;
    case "content-genres":
      contentGenres(event, dispatch, genres);
      break;
    case "content-menu-icons":
      menuIcons(event, dispatch);
      break;
  }
}
