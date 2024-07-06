"use client";

import { useEffect } from "react";

import { useRouter, usePathname } from "next/navigation";

import { useSelector, useDispatch } from "react-redux";

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useTheme,
} from "@mui/material";

import { RootState } from "@/app/store/store";

import items from "./items";
import keyDown from "@/utils/keyDown";
import focusItem from "@/utils/focusItem";
import { changeOpenSideBar } from "@/app/store/features/sidebar";

export default function SideBar() {
  const dispath = useDispatch();
  const path = usePathname();
  const open = useSelector((state: RootState) => state.sidebar.open);
  const router = useRouter();
  const theme = useTheme();
  useEffect(() => {
    if (path === "/") focusItem(dispath);
  }, [path]);

  return (
    <Box
      component={"nav"}
      sx={{ transition: ".3s" }}
      bgcolor={theme.palette.primary.main}
      width={80}
    >
      <Drawer
        variant="persistent"
        open={true}
        sx={{
          transition: ".3s",
          "& .MuiDrawer-paper": {
            background: theme.palette.primary.main,
            transition: ".3s",
            width: open ? 250 : 80,
            borderRight: "none",
            top: "80px",
          },
        }}
      >
        <List>
          {items.map((item, index) => (
            <ListItem
              className={item.ref}
              color="secondary"
              key={item.id}
              id={item.ref}
              disablePadding
              sx={{ display: "block" }}
              onKeyDown={(event) => {
                if (event.key === "Backspace") {
                  router.push("/");
                } else {
                  keyDown(event, item.ref, dispath, path);
                }
              }}
            >
              <ListItemButton
                color="primary"
                onClick={() => {
                  item.link && router.push(item.link);
                  dispath(changeOpenSideBar(false))
                }}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2,
                  mx: 2,
                  py: 0,
                  borderRadius: "4px",
                  overflow: "hidden",
                  "&:focus": {
                    bgcolor: "#fff",
                    color: theme.palette.primary.main,
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : "auto",
                    justifyContent: "center",
                    color: "unset",
                    "&:focus": {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0, fontWeight: 900 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
