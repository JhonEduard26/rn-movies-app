import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native"
import { Cast } from "../../../core/entities/cast.entity"

interface Props {
  actor: Cast
}

export const CastActor = ({ actor }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: actor.avatar }} style={styles.img} />

      <View style={styles.actorInfo}>
        <Text style={styles.actorName}>{actor.name}</Text>
        <Text style={styles.actorCharacter}>{actor.character}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    paddingLeft: 10,
    display: "flex",
    flexDirection: "column",
    width: 100,
  },
  img: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
  actorName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  actorCharacter: {
    fontSize: 14,
    color: "#666",
  },
})