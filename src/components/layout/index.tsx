"use client";

import { ReactNode, useState } from "react";

import { Box, ThemeProvider, useTheme } from "@mui/material";

import theme from "../theme";
import Header from "./Header";
import SideBar from "./SideBar";

export default function Layout({ children }: { children: ReactNode }) {
  const [openSideBar, setOpenSideBar] = useState<boolean>(true);

  return (
    <ThemeProvider theme={theme}>
      <Box display={"flex"}>
        <Header />
        <SideBar />
        <Box
          component={"main"}
          sx={{
            bgcolor: theme.palette.primary.main,
            flexGrow: 1,
            p: 3,
            mt: "80px",
            width: "75%",
            position: "relative",
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
