import { StyleSheet, StatusBar, Text, View, SafeAreaView, Button, Pressable, Image } from "react-native";
import logo from "./assets/images/logo.png"

export default function() {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.viewLogo}>
          <Image
          source={logo} style={estilos.logo}
          />
        <Text>Old Movie</Text>
        </View>
        <View style={estilos.viewBotoes}>
          <Button title="Buscar Filmes"/>
          <Button title="Favoritos"/>
        </View>
        <View style={estilos.viewRodape}>
          <Button title="Privacidade"/>
          <Button title="Sobre"/>
        </View>

      </SafeAreaView>
    </>
  )
}

const estilos = StyleSheet.create({
  container: {
    paddingLeft: 15,
    paddingRight: 15,
    flex: 1,
    backgroundColor: "#2b2b2b"
  },
  viewLogo: {
    backgroundColor: "darkgray",
    flex: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    width: 128,
    height: 128
  },
  viewBotoes: {
    backgroundColor: "orange",
    flex: 2,
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "flex-start"
  },
  viewRodape:{
    backgroundColor: "red",
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  }
})