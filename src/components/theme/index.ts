import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#111",
      dark: "#000",
      light: "#333",
      contrastText: "#fff",
    },
    secondary: {
      main: "#dcdcdc",
      dark: "#bdbdbd",
      light: "#efefef",
      contrastText: "#000",
    },
    background:{
      paper: '#111'
    }
  },
});
export default theme;
