import { StyleSheet, StatusBar, Text, View, SafeAreaView, Button, Pressable, Image } from "react-native";
import scream from "./assets/images/scream.png"
import { Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync();

export default function() {
  const [fontsLoaded, fontError] = useFonts({
    'Monoton-Regular': require('./assets/fonts/Monoton-Regular.ttf'),
  });

  /* Função atrelada ao hook useCallback.
  Quando uma função está conectada ao useCallback, garantimos
  que a referência dela é armazenada na memória somente uma vez. */
  const aoAtualizarLayout = useCallback(async () => {
    /* Se estiver tudo ok com o carregamento */
    if (fontsLoaded || fontError) {
      /* Escondemos a splashscreen */
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar barStyle="default" />
      <SafeAreaView style={estilos.container} onLayout={aoAtualizarLayout}>
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
  textoFoto: {
    paddingTop: 10,
    fontSize: 24,
    fontFamily: "Monoton-Regular"
  },
  logo: {
    width: 128,
    height: 128
  },
  viewBotoes: {
    backgroundColor: "darkgray",
    flex: 2,
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
    color: "#fff"
  },
  viewRodape:{
    backgroundColor: "red",
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  }
})