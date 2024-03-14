import { StyleSheet, Text, View, Image, Linking, Pressable, ScrollView } from 'react-native'
import SafeContainer from '../components/SafeContainer'
import logoTmdb from '../../assets/images/logo-tmdb.png'
import { LinearGradient } from 'expo-linear-gradient'


export default function Sobre() {
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
         <View><View>
      </View>
    </SafeContainer>
  )
}

const estilos = StyleSheet.create({
    subContainer: {
        flex: 0,
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
    },
    tmdb: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20
    }
})