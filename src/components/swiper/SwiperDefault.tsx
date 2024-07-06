"use client";

// import Swiper core and required modules
import { A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { UseQueryResult } from "react-query";

import { useDispatch } from "react-redux";

import CardMovie from "../Cards/CardMovie";
import Movie from "@/types/Movie";
import keyDown from "@/utils/keyDown";
import CardSkeleton from "../Skeleton/CardSkeleton";

export default function SwiperDefault({
  query,
  id,
}: {
  id: string;
  query: UseQueryResult<any, unknown>;
}) {
  const dispath = useDispatch();
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Swiper
      // install Swiper modules
      modules={[A11y]}
      spaceBetween={20}
      slidesPerView={4}
      allowTouchMove={false}
      breakpoints={{
        1570: {
          slidesPerView: 5,
        },
      }}
    >
      {query.isLoading
        ? array.map((item) => (
            <SwiperSlide style={{ background: "transparent" }} key={item}>
              <CardSkeleton />
            </SwiperSlide>
          ))
        : query.data?.results?.map((item: Movie) => (
            <SwiperSlide
              style={{ background: "transparent" }}
              key={item.id}
              onKeyDown={(event) => {
                keyDown(event, "carousel-options", dispath);
              }}
            >
              <CardMovie id={id} item={item} />
            </SwiperSlide>
          ))}
    </Swiper>
  );
}
