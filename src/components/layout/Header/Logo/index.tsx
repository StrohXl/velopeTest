"use client";

import { Avatar, Box, ButtonBase, Typography } from "@mui/material";

import { useTheme } from "@mui/material/styles";

export default function Logo() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        width: 240,
        display: "flex",
      }}
    >
      <Box
        component="span"
        sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}
      >
        <Typography component={"h2"} variant="h4">
          Velope
        </Typography>
      </Box>
    </Box>
  );
}
