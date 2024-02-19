import { StyleSheet, Text, View } from 'react-native'
import SafeContainer from '../components/SafeContainer'

export default function Sobre() {
  return (
    <SafeContainer>
      <View style={estilos.subcontainer}>
        <Text style={estilos.subtitulo}>Sobre o app Old Movies</Text>
        <Text style={estilos.texto}>O <Text style={estilos.nomeApp}>Old Movies</Text> é um aplicativo com fidelidade de permitir a busca por informações sobre filmes existentes na base de dados pública disponibilizada pelo site The Movie Database (TMDb).</Text>
        <Text>Ao localizar um filme, o usuário pode visualizar informações</Text>
        <Text style={estilos.texto}></Text>
        <Text style={estilos.texto}></Text>
      </View>
    </SafeContainer>
  )
}

const estilos = StyleSheet.create({
    subContainer: {
        flex: 1,
        padding: 16,
    },
    subtitulo: {
        fontFamily: "NotoSans",
        fontWeight: "bold",
        marginVertical: 8,
        fontSize: 18,
    },
    texto: {
        marginVertical: 8
    },
    nomeApp: {
    fontWeight: "bold",
    color: "#5451a6"
    }
})