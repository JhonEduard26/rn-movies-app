import { AxiosAdapter } from "./http/axios.adapter";

export const movieDbAdapter = new AxiosAdapter({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "2c7b5f94e6c6921327e68484ccfc52a7",
    language: "es-MX"
  }
})