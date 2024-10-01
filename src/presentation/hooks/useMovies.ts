import { useEffect, useState } from "react"
import { Movie } from "../../core/entities/movie.entity"
import * as UseCases from "../../core/use-cases"
import { movieDbFetcher } from "../../config/adapters/movie-db.adapter"

let popularPageNumber = 1

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
  const [popular, setPopular] = useState<Movie[]>([])
  const [topRated, setTopRated] = useState<Movie[]>([])
  const [upcoming, setUpcoming] = useState<Movie[]>([])

  useEffect(() => {
    initialLoad()
  }, [])

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDbFetcher)
    const popularPromise = UseCases.moviesPopularUseCase(movieDbFetcher)
    const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDbFetcher)
    const upcomingPromise = UseCases.moviesUpcomingUseCase(movieDbFetcher)

    const [
      nowPlaying,
      popular,
      topRated,
      upcoming
    ] = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise
    ])

    setNowPlaying(nowPlaying)
    setPopular(popular)
    setTopRated(topRated)
    setUpcoming(upcoming)

    setIsLoading(false)
  }

  return {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,

    // methods
    loadPopularNextPage: async () => {
      popularPageNumber++
      const popularMovies = await UseCases.moviesPopularUseCase(movieDbFetcher, { page: popularPageNumber })
      setPopular(prev => [...prev, ...popularMovies])
    }
  }
}