import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { TopRatedResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

export const moviesTopRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<TopRatedResponse>("/top_rated")

    return upcoming.results.map(MovieMapper.fromMovieDBResultToEntity)
  } catch (error) {
    throw new Error("Error fetching top rated movies")
  }
}