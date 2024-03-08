import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Separador from './Separador';

export default function CardFilme({filme}) {
  /* Extraindo as informações do filme (titulo e imagem de capa) */
  const { title, poster_path } = filme;
  return (
    
    <View style={estilos.card}>
      <Image 
      style={estilos.image} 
      source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }}
      resizeMode="cover"
      />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}>{title}</Text>
        <View style={estilos.botoes}>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Leia mais</Text>
          </Pressable>
          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>Salvar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
    image:{
        width: 110,
        height: 160,
    },
    card: {
      flexDirection: "row",
      borderWidth: 2,
      borderRadius: 2,
      backgroundColor: "#EEEEEE",
    },
    corpo: {
    flex: 1,
    backgroundColor: "#EEEEEE"
    },
    titulo: {
      fontSize: 18,
      color: "#EEEEEE",
      backgroundColor: "#2B2B2B",
      padding: 8,
      marginVertical: 20,
      textAlign: "center"
    },
    botoes: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    botao: {
      backgroundColor: "#EEEEEE",
      padding: 5,
      borderRadius: 2,
      borderWidth: 1
    },
    textoBotao: {
      color: "#2B2B2B"
    }
})