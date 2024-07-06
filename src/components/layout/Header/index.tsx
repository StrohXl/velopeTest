"use client";

import { useState } from "react";

import { AppBar, Box, Button, IconButton, Toolbar } from "@mui/material";

import { Notifications, Person } from "@mui/icons-material";
import { useDispatch } from "react-redux";

import Logo from "./Logo";
import keyDown from "@/utils/keyDown";

export default function Header() {
  const dispath = useDispatch();

  return (
    <AppBar sx={{ py: 1 }} position="fixed" elevation={0}>
      <Toolbar>
        {/* logo & toggler button */}
        <Logo />
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ flexGrow: 1 }} />
        <Box id="content-menu-icons" display={"flex"} gap={1}>
          <IconButton
            onKeyDown={(event) => keyDown(event, "content-menu-icons", dispath)}
            color="secondary"
          >
            <Notifications sx={{ fontSize: 30 }} />
          </IconButton>
          <IconButton
            onKeyDown={(event) => keyDown(event, "content-menu-icons", dispath)}
            color="secondary"
          >
            <Person sx={{ fontSize: 30 }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
