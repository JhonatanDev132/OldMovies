import { Image, StyleSheet, Text, View } from 'react-native'
import gato from '../../assets/images/meme-cat.gif'

export default function NaoLocalizado() {
  return (
    <View style={estilos.subcontainer}> 
      <Text style={estilos.texto}>Nenhum filme foi localizado!</Text>
      <View style={estilos.imagem}>
        <Image
        resizeMode="cover"
        source={gato}
        />
      </View>
    </View>
    
  )
}

const estilos = StyleSheet.create({
    texto: {
        color: "red",
        marginBottom: 20
    },
    imagem: {
        alignItems: "center"
    }
})