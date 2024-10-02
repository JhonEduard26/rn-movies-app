import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { MovieDB } from "../../../infrastructure/interfaces/movie-db.responses";
import { MovieMapper } from "../../../infrastructure/mappers/movie.mapper";
import { FullMovie } from "../../entities/movie.entity";

export const getByIdUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<FullMovie> => {
  try {
    const movie = await fetcher.get<MovieDB>(`/${movieId}`)

    return MovieMapper.fromMovieDBToEntity(movie)
  } catch (error) {
    throw new Error("Error fetching movie")
  }
}