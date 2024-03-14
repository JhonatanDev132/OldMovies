import { StyleSheet, StatusBar, Button, Pressable,Text} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Sobre from "./src/screens/Sobre";
import Privacidade from "./src/screens/Privacidade";
import BuscarFilmes from "./src/screens/BuscarFilmes";
import Resultados from "./src/screens/Resultados";
import Detalhes from "./src/screens/Detalhes";

// Criação/inicialização do mecanismo Stack
const Stack = createNativeStackNavigator();

export default function() {

  return (
    <>
      <StatusBar barStyle="default" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{
          headerStyle: { backgroundColor: "#2b2b2b"},
          headerTintColor: "white"
        }}>
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Sobre" component={Sobre} options={{ title: "Conheça o OldMovies"}} />
          <Stack.Screen name="Privacidade" component={Privacidade} />
          <Stack.Screen name="Buscar" component={BuscarFilmes} options={{ title: "O que você procura?"}}/>
          <Stack.Screen name="Resultados" component={Resultados}/>
          <Stack.Screen 
          name="Detalhes" 
          component={Detalhes}
          options={({navigation}) => {
            return{
              headerRight: () => <Pressable style={estilos.botao} onPress={() => navigation.navigate("Home")}>
                <Text style={estilos.textoBotao}>Home</Text>
              </Pressable>,
            };
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}
const estilos = StyleSheet.create({
  botao: {
    borderWidth: 2,
    borderColor: "#EEEEEE",
    borderRadius: 2,
    padding: 10,
    
  },
  textoBotao: {
    color: "#EEEEEE"
  }
})