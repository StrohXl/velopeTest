"use client";

import { useRouter } from "next/navigation";

import Image from "next/image";

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import { useDispatch } from "react-redux";

import Movie from "@/types/Movie";

import { changeOpenSideBar } from "@/app/store/features/sidebar";

export default function CardTv({ item, id }: { id: string; item: any }) {
  const router = useRouter();

  return (
    <Card
      onKeyDown={(event) => {
        event.key === "Enter" && router.push("/tv/" + item.id);
      }}
      sx={{ width: "100%", background: "transparent", boxShadow: "none" }}
    >
      <CardActionArea className={id}>
        <CardMedia
          component={"div"}
          sx={{
            position: "relative",
            width: "100%",
            height: "auto",
            aspectRatio: 1.77,
            borderRadius: "4px",
            overflow: "hidden",
          }}
        >
          <Image
            width={320}
            height={193}
            title="asdf"
            src={
              item.backdrop_path == null
                ? ""
                : process.env.NEXT_PUBLIC_API_IMAGE_URL + item.backdrop_path
            }
            alt="asdfas"
          />
        </CardMedia>
        <CardContent sx={{ pl: 0 }}>
          <Typography
            textAlign={"left"}
            gutterBottom
            variant="h6"
            component="h3"
            className="line-clamp-1"
            mb={0}
          >
            {item.name}
          </Typography>
          <Typography textAlign={"left"} variant="body2" color="text.secondary">
            {item.first_air_date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
