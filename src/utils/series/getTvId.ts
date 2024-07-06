import { restRequest } from "../restRequest";

async function getTvId(id: string | string[]) {
  const response = await restRequest("GET", `/tv/${id}`);
  
return response;
}

export default getTvId;
