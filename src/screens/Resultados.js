import { StyleSheet, Text, View } from 'react-native'
import SafeContainer from '../components/SafeContainer'



export default function Resultados({ route }) {
  console.log(route.params.filme);
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.subtitulo}>Você buscou por: </Text>
      </View>
    </SafeContainer>
  )
}

const estilos = StyleSheet.create({
    subContainer: {
        flex: 0,
        padding: 16,
    },
    texto: {
        marginVertical: 8
    },
    nomeApp: {
    fontWeight: "bold",
    color: "#2b2b2b"
    },
    tmdb: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20
    }
})