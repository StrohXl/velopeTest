"use client";

import { useEffect } from "react";

import Image from "next/image";

import { useParams, usePathname } from "next/navigation";

import { PlayArrow, Star } from "@mui/icons-material";

import { Box, Button, Grid, Rating, Typography } from "@mui/material";

import { useQuery } from "react-query";

import { useDispatch } from "react-redux";

import { changeOpenSideBar } from "@/app/store/features/sidebar";
import keyDown from "@/utils/keyDown";
import getMovieId from "@/utils/movies/getMovieId";




export default function MovieID() {
  const router = useParams();
  const path = usePathname();
  const dispath = useDispatch();
  const id = router.id;
  const query = useQuery({
    queryKey: ["get-categories", path], // Run the function to get the movies when one of these statuses changes or when an invalidateQueries of 'get-movies' is performed
    queryFn: async () => await getMovieId(id),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  function minutosAHoras(minutos: number) {
    var horas = Math.floor(minutos / 60);
    var minutosRestantes = minutos % 60;

    return (
      <>
        Duration {horas}h {minutosRestantes}m
      </>
    );
  }
  useEffect(() => {
    dispath(changeOpenSideBar(false));
  }, []);

  return (
    <>
      {query.isLoading ? (
        "Cargando"
      ) : (
        <Box width={"100%"} p={{ md: 4, xl: 10}} height={"100%"}>
          <Image
            style={{ opacity: 0.3 }}
            fill
            alt="joder"
            src={
              query.data.backdrop_path
                ? process.env.NEXT_PUBLIC_API_IMAGE_URL +
                  query.data.backdrop_path
                : ""
            }
          />
          <Box position={"relative"} zIndex={100} className="text-white">
            <Typography
              sx={{ opacity: 0.9 }}
              variant="body2"
              fontWeight={600}
              color={"secondary"}
            >
              {minutosAHoras(query.data.runtime)}
            </Typography>
            <Grid mt={4} display={"flex"} alignItems={"center"} gap={2}>
              <Box display={"flex"} alignItems={"center"} gap={0.5}>
                <Star className="!text-[#ffb300] text-2xl" />
                <Typography
                  height={"30px"}
                  fontWeight={700}
                  variant="h6"
                  component={"span"}
                >
                  {query.data.vote_average}
                </Typography>
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={1}>
                {query.data.genres.map((item: any, index: number) => (
                  <>
                    <Typography
                      key={item.id}
                      sx={{
                        opacity: 0.9,
                        display: "flex",
                        alignItems: "end",
                      }}
                      height={"30px"}
                      fontWeight={300}
                      variant="body1"
                      component={"span"}
                    >
                      {item.name}
                      {index < query.data.genres.length - 1 && " | "}
                    </Typography>
                  </>
                ))}
              </Box>
            </Grid>
            <Typography variant={'h3'} fontWeight={900} mt={4}>
              {query.data.title}
            </Typography>
            <Typography
              variant="body1"
              rowGap={2}
              maxWidth={600}
              fontWeight={300}
              mt={4}
              lineHeight={2}
              className="line-clamp-3"
            >
              {query.data.overview}
            </Typography>
            <Grid
              id="content-buttons-movie"
              mt={4}
              display={"flex"}
              position={"relative"}
              zIndex={100}
              gap={2}
            >
              <Button
                variant="contained"
                sx={{ px: 4, borderRadius: "20px" }}
                color="error"
                onKeyDown={(event) =>
                  keyDown(event, "content-buttons-movie", dispath)
                }
                startIcon={<PlayArrow />}
                autoFocus
              >
                Watch
              </Button>
              <Button
                variant="outlined"
                sx={{ px: 4, borderRadius: "20px" }}
                onKeyDown={(event) =>
                  keyDown(event, "content-buttons-movie", dispath)
                }
                color="secondary"
                startIcon={<PlayArrow />}
              >
                Add List
              </Button>
            </Grid>
          </Box>
        </Box>
      )}
    </>
  );
}
