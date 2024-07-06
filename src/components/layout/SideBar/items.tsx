import { Search, Movie, Tv, TvSharp } from "@mui/icons-material";

const items = [
  {
    id: 1,
    title: "Search",
    icon: <Search />,
    ref: 'side-bar-option'
  },
  {
    id: 2,
    title: "Movies",
    icon: <Movie />,
    ref: 'side-bar-option',
    link: '/'
  },
  {
    id: 2,
    title: "Tv",
    icon: <TvSharp />,
    ref: 'side-bar-option',
    link: '/tv'
  },
];

export default items;
