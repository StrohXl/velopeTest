import axios from "axios";

type HTTPMethod =
  | "CONNECT"
  | "DELETE"
  | "GET"
  | "HEAD"
  | "OPTIONS"
  | "PATCH"
  | "POST"
  | "PUT";

interface restRequestOptions {
  body?: BodyInit | { [key: string]: any };
  params?: {
    [key: string | symbol]: any;
  };
  headers?: {
    [key: string | symbol]: string;
  };
}

const defaultHeaders = {
  "Content-Type": "application/json",
  accept: "application/json",
};

export const generateBody = (body: any) =>
  typeof body === "string" || body instanceof FormData
    ? body
    : JSON.stringify(body);

export async function restRequest(
  method: HTTPMethod = "GET",
  path = "",
  options: restRequestOptions = {}
) {
  let { headers } = options;
  const { body, params } = options;

  headers = { ...defaultHeaders, ...headers };


  const response = await axios({
    url: process.env.NEXT_PUBLIC_API_URL + path,
    method,
    headers,
    params: {
      api_key: process.env.NEXT_PUBLIC_API_KEY,
      language: "en",
      ...params,
    },
    data: generateBody(body),
  });

  return response.data;
}
