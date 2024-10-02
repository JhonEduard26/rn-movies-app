import { movieDbFetcher } from "../../config/adapters/movie-db.adapter"
import { type Cast } from "../../core/entities/cast.entity"
import { type FullMovie } from "../../core/entities/movie.entity"
import { useEffect, useState } from "react"
import * as UseCases from "../../core/use-cases"

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState<FullMovie>()
  const [cast, setCast] = useState<Cast[]>()

  useEffect(() => {
    loadMovie()
  }, [movieId])

  const loadMovie = async () => {
    setIsLoading(true)

    const fullMoviePromise = UseCases.getByIdUseCase(movieDbFetcher, movieId)
    const castPromise = UseCases.getCastUseCase(movieDbFetcher, movieId)

    const [fullMovie, cast] = await Promise.all([fullMoviePromise, castPromise])

    setMovie(fullMovie);
    setCast(cast);
    setIsLoading(false)
  }

  return {
    cast,
    isLoading,
    movie,
  }
}