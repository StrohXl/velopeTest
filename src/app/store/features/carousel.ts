import { createSlice } from "@reduxjs/toolkit";

import focusItem from "@/utils/focusItem";

export const carousel = createSlice({
  name: "carousel",
  initialState: {
    carouselFather: {
      positionY: 0,
      carousel1: {
        positionX: 0,
      },
      carousel2: {
        positionX: 0,
      },
      carousel3: {
        positionX: 0,
      },
      carousel4: {
        positionX: 0,
      },
      carousel5: {
        positionX: 0,
      },
    },
  },
  reducers: {
    changeCarousel1(state, value) {
      switch (value.payload) {
        case "sumar":
          state.carouselFather.carousel1.positionX < 19
            ? state.carouselFather.carousel1.positionX++
            : (state.carouselFather.carousel1.positionX = 0);
          break;
        case "restar":
          state.carouselFather.carousel1.positionX > 0
            ? state.carouselFather.carousel1.positionX--
            : focusItem();
          break;
      }
    },
    changeCarousel2(state, value) {
      switch (value.payload) {
        case "sumar":
          state.carouselFather.carousel2.positionX < 19
            ? state.carouselFather.carousel2.positionX++
            : (state.carouselFather.carousel2.positionX = 0);
          break;
        case "restar":
          state.carouselFather.carousel2.positionX > 0
            ? state.carouselFather.carousel2.positionX--
            : focusItem();
          break;
      }
    },
    changeCarousel3(state, value) {
      switch (value.payload) {
        case "sumar":
          state.carouselFather.carousel3.positionX < 19
            ? state.carouselFather.carousel3.positionX++
            : (state.carouselFather.carousel3.positionX = 0);

          break;
        case "restar":
          state.carouselFather.carousel3.positionX > 0
            ? state.carouselFather.carousel3.positionX--
            : focusItem();
          break;
      }
    },
    changeCarousel4(state, value) {
      switch (value.payload) {
        case "sumar":
          state.carouselFather.carousel4.positionX < 19
            ? state.carouselFather.carousel4.positionX++
            : (state.carouselFather.carousel4.positionX = 0);
          break;
        case "restar":
          state.carouselFather.carousel4.positionX > 0
            ? state.carouselFather.carousel4.positionX--
            : focusItem();
          break;
      }
    },
    changeCarousel5(state, value) {
      switch (value.payload) {
        case "sumar":
          state.carouselFather.carousel5.positionX < 19
            ? state.carouselFather.carousel5.positionX++
            : (state.carouselFather.carousel3.positionX = 0);

          break;
        case "restar":
          state.carouselFather.carousel5.positionX > 0
            ? state.carouselFather.carousel5.positionX--
            : focusItem();
          break;
      }
    },
    upPositionY(state) {
      state.carouselFather.positionY < 4 && state.carouselFather.positionY++;
    },
    downPositionY(state) {
      if (state.carouselFather.positionY > 0) {
        state.carouselFather.positionY--;
      } else {
        const contentGenres = document.getElementById("content-genres");
        setTimeout(() => {
          contentGenres?.querySelector("button")?.focus();
        }, 50);
      }
    },
    focusCarousel(state) {
      const swiperWrappers = document.getElementsByClassName("swiper-wrapper");
      const swiperSlide =
        swiperWrappers[
          state.carouselFather.positionY + 1
        ].getElementsByClassName("MuiPaper-root");
      switch (state.carouselFather.positionY) {
        case 0:
          console.log(swiperSlide[state.carouselFather.carousel1.positionX]);
          swiperSlide[state.carouselFather.carousel1.positionX]
            .querySelector("button")
            ?.focus();
          break;
        case 1:
          swiperSlide[state.carouselFather.carousel2.positionX]
            .querySelector("button")
            ?.focus();
          break;
        case 2:
          swiperSlide[state.carouselFather.carousel3.positionX]
            .querySelector("button")
            ?.focus();
          break;
        case 3:
          swiperSlide[state.carouselFather.carousel4.positionX]
            .querySelector("button")
            ?.focus();
          break;
        case 4:
          swiperSlide[state.carouselFather.carousel5.positionX]
            .querySelector("button")
            ?.focus();
          break;
      }
    },
  },
});

export const {
  changeCarousel1,
  changeCarousel2,
  changeCarousel3,
  changeCarousel4,
  changeCarousel5,
  upPositionY,
  downPositionY,
  focusCarousel,
} = carousel.actions;

export default carousel.reducer;
