import { restRequest } from "../restRequest";

type SortBy =
  | "original_title.asc"
  | "original_title.desc"
  | "popularity.asc"
  | "popularity.desc"
  | "revenue.asc"
  | "revenue.desc"
  | "primary_release_date.asc"
  | "primary_release_date.desc"
  | "title.asc"
  | "title.desc";

type Props = {
  page?: number;
  include_adult?: boolean;
  year?: number;
  include_video?: boolean;
  sort_by?: SortBy;
  with_genres?: number;
};

async function getTv(params?: Props) {
  const response = await restRequest("GET", `/discover/tv`, {
    params: {
      ...params,
      with_genres: params?.with_genres == 0 ? "" : params?.with_genres,
    },
  });

  return response;
}

export default getTv;
