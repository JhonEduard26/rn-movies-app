import { RouteProp, useRoute } from "@react-navigation/native"
import { Text, View } from "react-native"
import { RootStackParamList } from "../../navigation/stack-navigation"

export const DetailsScreen = () => {
  const params = useRoute<RouteProp<RootStackParamList>>().params

  return (
    <View>
      <Text>Details</Text>
    </View>
  )
}