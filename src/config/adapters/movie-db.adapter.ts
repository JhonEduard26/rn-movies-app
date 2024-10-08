import { THE_MOVIE_DB_API_KEY } from "@env";
import { AxiosAdapter } from "./http/axios.adapter";

export const movieDbFetcher = new AxiosAdapter({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    // api_key: "2c7b5f94e6c6921327e68484ccfc52a7",
    api_key: THE_MOVIE_DB_API_KEY,
    language: "es-MX"
  }
})