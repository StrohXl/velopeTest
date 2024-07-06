import { type Dispatch } from "@reduxjs/toolkit";

import {
  changeCarousel1,
  changeCarousel2,
  changeCarousel3,
  changeCarousel4,
  changeCarousel5,
  downPositionY,
  focusCarousel,
  upPositionY,
} from "@/app/store/features/carousel";

import { focusItem } from "@/app/store/features/sidebar";


export default function keyDownCarousel(
  event: any,
  dispatch: Dispatch,
) {
  switch (event.key) {
    case "ArrowDown":
      dispatch(upPositionY());
      dispatch(focusCarousel());
      break;

    case "ArrowUp":
      dispatch(downPositionY());
      dispatch(focusCarousel());
      break;
    case "ArrowRight":
      switch (event.target.classList[3]) {
        case "carousel-1":
          dispatch(changeCarousel1("sumar"));
          break;
        case "carousel-2":
          dispatch(changeCarousel2("sumar"));
          break;
        case "carousel-3":
          dispatch(changeCarousel3("sumar"));
          break;
        case "carousel-4":
          dispatch(changeCarousel4("sumar"));
          break;
        case "carousel-5":
          dispatch(changeCarousel5("sumar"));
          break;
      }
      dispatch(focusCarousel());
      break;

    case "ArrowLeft":
      switch (event.target.classList[3]) {
        case "carousel-1":
          dispatch(changeCarousel1("restar"));
          break;
        case "carousel-2":
          dispatch(changeCarousel2("restar"));
          break;
        case "carousel-3":
          dispatch(changeCarousel3("restar"));
          break;
        case "carousel-4":
          dispatch(changeCarousel4("restar"));
          break;
        case "carousel-5":
          dispatch(changeCarousel5("restar"));
          break;
      }
      dispatch(focusCarousel());
      break;
    case "Backspace": {
      dispatch(focusItem());
    }
  }
}
