import { FullMovie, Movie } from "../../core/entities/movie.entity";
import type { MovieDB, Result } from "../interfaces/movie-db.responses";

export class MovieMapper {

  static fromMovieDBResultToEntity(result: Result): Movie {
    return {
      backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
      description: result.overview,
      id: result.id,
      poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
      rating: result.vote_average,
      releaseDate: new Date(result.release_date),
      title: result.title,
    }
  }

  static fromMovieDBToEntity(movieDB: MovieDB): FullMovie {
    return {
      backdrop: `https://image.tmdb.org/t/p/w500${movieDB.backdrop_path}`,
      budget: movieDB.budget,
      description: movieDB.overview,
      duration: movieDB.runtime,
      genres: movieDB.genres.map(genre => genre.name),
      id: movieDB.id,
      originalTitle: movieDB.original_title,
      poster: `https://image.tmdb.org/t/p/w500${movieDB.poster_path}`,
      productionCompanies: movieDB.production_companies.map(company => company.name),
      rating: movieDB.vote_average,
      releaseDate: new Date(movieDB.release_date),
      title: movieDB.title,
    }
  }
}
