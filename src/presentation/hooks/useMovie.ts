import { FullMovie } from "../../core/entities/movie.entity"
import { movieDbFetcher } from "../../config/adapters/movie-db.adapter"
import { useEffect, useState } from "react"
import * as UseCases from "../../core/use-cases"

export const useMovie = (movieId: number) => {
  const [isLoading, setIsLoading] = useState(true)
  const [movie, setMovie] = useState<FullMovie>()

  useEffect(() => {
    loadMovie()
  }, [movieId])

  const loadMovie = async () => {
    setIsLoading(true)
    const fullMovie = await UseCases.getByIdUseCase(movieDbFetcher, movieId)
    setMovie(fullMovie);
    setIsLoading(false)
  }

  return {
    isLoading,
    movie,
  }
}