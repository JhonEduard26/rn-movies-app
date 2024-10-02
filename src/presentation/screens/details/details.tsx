import { RouteProp, useRoute } from "@react-navigation/native"
import { Text, View } from "react-native"
import { RootStackParamList } from "../../navigation/stack-navigation"
import { useMovie } from "../../hooks/useMovie"
import { MovieHeader } from "../../components/movie/movie-header"

export const DetailsScreen = () => {
  const params = useRoute<RouteProp<RootStackParamList>>().params
  const { isLoading, movie } = useMovie(params?.movieId as number)

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  return (
    <View>
      <MovieHeader
        originalTitle={movie!.originalTitle}
        poster={movie!.poster}
        title={movie!.title}
      />
    </View>
  )
}