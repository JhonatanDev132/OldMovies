import { StyleSheet, StatusBar, Text, View, SafeAreaView, Button, Pressable } from "react-native";

export default function() {
  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={estilos.container}>
        <View style={estilos.viewLogo}>
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
    backgroundColor: "yellow"
  },
  viewLogo: {
    backgroundColor: "green",
    flex: 3,
    alignItems: "center",
    justifyContent: "flex-end"
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