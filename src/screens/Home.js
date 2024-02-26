import { StyleSheet, Text, View, Pressable, Image  } from 'react-native'
import scream from "../../assets/images/scream.png"
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import SafeContainer from '../components/SafeContainer'

export default function Home({navigation}) {
  return (
    <SafeContainer>
      <View style={estilos.viewLogo}>
          <Image
          source={scream} style={estilos.logo}
          />
        <Text style={estilos.textoFoto}>Old Movies</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Pressable style={estilos.botao}>
            <View style={{flexDirection: "row"}}>
            <Text style={estilos.textoBotao}>Buscar Filmes </Text>
            <Ionicons name="search" size={20} color="white" />
            </View>
          </Pressable>

          <Pressable style={estilos.botao}>
            <View style={{flexDirection: "row"}}>
            <Fontisto name="favorite" size={20} color="white" />
            <Text style={estilos.textoBotao}> Favoritos</Text>
            </View>
          </Pressable>
        </View>
        <View style={estilos.viewRodape}>
          <Pressable style={estilos.botaoRodape} onPress={() => navigation.navigate("Privacidade")}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="lock-closed" size={16} color="white"/>{" "}
              Privacidade
            </Text>
          </Pressable>
          <Pressable style={estilos.botaoRodape} onPress={() => navigation.navigate("Sobre")}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="information-circle" size={16} color="white"/>{" "}
              Sobre
            </Text>
          </Pressable>
        </View>

    </SafeContainer>
  )
}

const estilos = StyleSheet.create({
    viewLogo: {
        backgroundColor: "darkgray",
        flex: 3,
        alignItems: "center",
        justifyContent: "center"
      },
      textoFoto: {
        paddingTop: 10,
        fontSize: 24,
        fontFamily: "kyiv"
      },
      logo: {
        width: 128,
        height: 128
      },
      viewBotoes: {
        backgroundColor: "darkgray",
        flex: 1,
        justifyContent: "space-around",
        flexDirection: "row",
        alignItems: "flex-start"
      },
      botao: {
        backgroundColor: "#2b2b2b",
        padding: 10,
        borderRadius: 3
      },
      textoBotao: {
        fontFamily: "NotoSans",
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff"
      },
      viewRodape:{
        backgroundColor: "#2b2b2b",
        flex: 0.5,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
      },
      botaoRodape: {
        padding: 16
      }
})