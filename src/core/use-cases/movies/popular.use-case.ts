import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { PopularResponse } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import type { Movie } from "../../entities/movie.entity";

interface Options {
  page?: number
  limit?: number
}

export const moviesPopularUseCase = async (fetcher: HttpAdapter, options?: Options): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<PopularResponse>("/popular" , {
      params: {
        page: options?.page ?? 1
      }
    })

    return nowPlaying.results.map(MovieMapper.fromMovieDBResultToEntity)
  } catch (error) {
    throw new Error("Error fetching popular movies")
  }
}