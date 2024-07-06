"use client";

import { Box, Button, Grid, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";

import getMovies from "@/utils/movies/getMovies";
import keyDown from "@/utils/keyDown";
import SwiperDefault from "@/components/swiper/SwiperDefault";
import { RootState } from "./store/store";

export default function Home() {
  const dispath = useDispatch();
  const genres = useSelector((state: RootState) => state.genres.id);

  const query = useQuery({
    queryKey: ["get-categories", genres], // Run the function to get the movies when one of these statuses changes or when an invalidateQueries of 'get-movies' is performed
    queryFn: async () => await getMovies({ with_genres: genres }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  const query2 = useQuery({
    queryKey: ["get-categories-page2", genres], // Run the function to get the movies when one of these statuses changes or when an invalidateQueries of 'get-movies' is performed
    queryFn: async () => await getMovies({ page: 2, with_genres: genres }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  const query3 = useQuery({
    queryKey: ["get-categories-page3", genres], // Run the function to get the movies when one of these statuses changes or when an invalidateQueries of 'get-movies' is performed
    queryFn: async () => await getMovies({ page: 3, with_genres: genres }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  const query4 = useQuery({
    queryKey: ["get-categories-page4", genres], // Run the function to get the movies when one of these statuses changes or when an invalidateQueries of 'get-movies' is performed
    queryFn: async () => await getMovies({ page: 4, with_genres: genres }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  const query5 = useQuery({
    queryKey: ["get-categories-page5", genres], // Run the function to get the movies when one of these statuses changes or when an invalidateQueries of 'get-movies' is performed
    queryFn: async () => await getMovies({ page: 5, with_genres: genres }),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
  const genresList = [
    {
      id: 0,
      name: "All",
    },
    {
      id: 28,
      name: "Action",
    },
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 16,
      name: "Animation",
    },
    {
      id: 35,
      name: "Comedy",
    },
    {
      id: 80,
      name: "Crime",
    },
  ];

  return (
    <Box sx={{ height: "calc(100vh - 128px)", pb: 5 }}>
      <Grid mb={3} id="content-genres">
        {genresList.map((item) => (
          <Button
            id={item.id === 0 ? "ButtonFocus" : ""}
            autoFocus={item.id === 0 && true}
            onKeyDown={(event) =>
              keyDown(event, "content-genres", dispath, "", {
                id: item.id,
                name: item.name,
              })
            }
            color="secondary"
            variant={genres === item.id ? "outlined" : "text"}
            key={item.id}
          >
            {item.name}
          </Button>
        ))}
      </Grid>
      <Swiper
        direction={"vertical"}
        slidesPerView={2}
        breakpoints={{ 1500: { slidesPerView: 3 } }}
      >
        <SwiperSlide style={{ background: "transparent" }}>
          <SwiperDefault id="carousel-1" query={query} />
        </SwiperSlide>
        <SwiperSlide style={{ background: "transparent" }}>
          <SwiperDefault id="carousel-2" query={query2} />
        </SwiperSlide>
        <SwiperSlide style={{ background: "transparent" }}>
          <SwiperDefault id="carousel-3" query={query3} />
        </SwiperSlide>
        <SwiperSlide style={{ background: "transparent" }}>
          <SwiperDefault id="carousel-4" query={query4} />
        </SwiperSlide>
        <SwiperSlide style={{ background: "transparent" }}>
          <SwiperDefault id="carousel-5" query={query5} />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
