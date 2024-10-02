import { RouteProp, useRoute } from "@react-navigation/native"
import { ScrollView, Text, View } from "react-native"
import { RootStackParamList } from "../../navigation/stack-navigation"
import { useMovie } from "../../hooks/useMovie"
import { MovieHeader } from "../../components/movie/movie-header"
import { MovieDetails } from "../../components/movie/movie-details"
import { FullScreenLoader } from "../../components/loader/full-screen-loader"

export const DetailsScreen = () => {
  const params = useRoute<RouteProp<RootStackParamList>>().params
  const { isLoading, movie, cast = [] } = useMovie(params?.movieId as number)

  if (isLoading) {
    return <FullScreenLoader />
  }

  return (
    <ScrollView>
      <MovieHeader
        originalTitle={movie!.originalTitle}
        poster={movie!.poster}
        title={movie!.title}
      />
      <MovieDetails movie={movie!} cast={cast} />
    </ScrollView>
  )
}