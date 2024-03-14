import { StyleSheet, Text, View, Image, Linking, Pressable, ScrollView } from 'react-native'
import SafeContainer from '../components/SafeContainer'



export default function Favoritos() {
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
         <View style={estilos.viewFavoritos}>
          <Text style={estilos.texto}>Favoritos</Text>
         </View>
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
      marginVertical: 8,
    }
})