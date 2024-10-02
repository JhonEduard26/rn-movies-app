import { HttpAdapter } from "../../../config/adapters/http/http.adapter"
import { MovieCastResponse } from "../../../infrastructure/interfaces/movie-db.responses"
import { CastMapper } from "../../../infrastructure/mappers/cast.mapper"
import { Cast } from "../../entities/cast.entity"

export const getCastUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<Cast[]> => {
  try {
    const { cast } = await fetcher.get<MovieCastResponse>(`/${movieId}/credits`)

    return cast.map(CastMapper.fromMovieDBCastToEntity)
  } catch (error) {
    throw new Error("Error fetching cast")
  }
}