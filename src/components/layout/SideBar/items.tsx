import { Search, Home } from "@mui/icons-material";

const items = [
  {
    id: 1,
    title: "Search",
    icon: <Search />,
    ref: 'side-bar-option'
  },
  {
    id: 2,
    title: "Home",
    icon: <Home />,
    ref: 'side-bar-option',
    link: '/'

  },
];

export default items;
