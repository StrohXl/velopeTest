"use client";

import { SwiperSlide } from "swiper/react";
import { useQuery } from "react-query";

import getMovies from "@/utils/movies/getMovies";

export default function Movies() {
  const query = useQuery({
    queryKey: ["get-categories"], // Run the function to get the movies when one of these statuses changes or when an invalidateQueries of 'get-movies' is performed
    queryFn: async () => await getMovies(),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  return (
    <>
      {query.isLoading ? (
        <>
        <SwiperSlide >funciona</SwiperSlide>
        <SwiperSlide >funciona</SwiperSlide>
        </>
      ) : (
        query.data.results.map((item: any) => (
          <SwiperSlide key={item.id}>funciona</SwiperSlide>
        ))
      )}
    </>
  );
}
