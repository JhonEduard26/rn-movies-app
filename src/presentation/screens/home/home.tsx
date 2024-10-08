import { Text, View } from "react-native"
import { useMovies } from "../../hooks/useMovies"
import { ScrollView } from "react-native-gesture-handler"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { PosterCarrousel } from "../../components/movies/poster-carrousel"
import { HorizontalCarrousel } from "../../components/movies/horizontal-carrousel"
import { FullScreenLoader } from "../../components/loader/full-screen-loader"

export const HomeScreen = () => {
  const { top } =useSafeAreaInsets()
  const {
    isLoading,
    nowPlaying,
    popular,
    topRated,
    upcoming,
    loadPopularNextPage
  } = useMovies()

  if (isLoading) {
    return (
      <FullScreenLoader />
    )
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
        {/* Principales */}
        <PosterCarrousel movies={nowPlaying} />

        {/* Populares */}
        <HorizontalCarrousel
          movies={popular}
          title="Populares"
          loadNextPage={loadPopularNextPage}
        />

        {/* Mejor calificadas */}
        <HorizontalCarrousel movies={topRated} title="Mejor calificadas" />

        {/* Proximamente */}
        <HorizontalCarrousel movies={upcoming} title="Muy pronto" />
      </View>
    </ScrollView>
  )
}