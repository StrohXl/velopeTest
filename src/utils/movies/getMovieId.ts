import { restRequest } from "../restRequest";

async function getMovieId(id: string | string[]) {
  const response = await restRequest("GET", `/movie/${id}`);
  
return response;
}

export default getMovieId;
