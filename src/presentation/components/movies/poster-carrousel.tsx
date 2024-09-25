import { View } from "react-native"
import { Movie } from "../../../core/entities/movie.entity"
import { ScrollView } from "react-native-gesture-handler"
import { MoviePoster } from "./movie-poster"

interface Props {
  movies: Movie[]
  height?: number
}

export const PosterCarrousel = ({ movies, height = 440 }: Props) => {
  return (
    <View style={{ height }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {
          movies.map((movie) => (
            <MoviePoster key={movie.id} movie={movie} />
          ))
        }
      </ScrollView>
    </View>
  )
}