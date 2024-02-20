import { StyleSheet, Text, View, Image, Linking, Pressable, ScrollView } from 'react-native'
import SafeContainer from '../components/SafeContainer'
import logoTmdb from '../../assets/images/logo-tmdb.png'


export default function Sobre() {
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <ScrollView>
        <Text style={estilos.subtitulo}>Sobre o app Old Movies</Text>
        <Text style={estilos.texto}>O <Text style={estilos.nomeApp}>Old Movies</Text> é um aplicativo com fidelidade de permitir a busca por informações sobre filmes existentes na base de dados pública disponibilizada pelo site The Movie Database (TMDb).</Text>

        <Pressable style={estilos.tmdb} onPress={() => {Linking.openURL('https://www.themoviedb.org/?language=pt-BR')}}>
            <Image 
            source={logoTmdb}
            />
            
        </Pressable>
            
            
        <Text> Ao localizar um filme, o usuário pode visualizar informações como
          título, data de lançamento, nota média de avaliação e uma breve
          descrição sobre o filme e, caso queira, salvar estas informações em
          uma lista no próprio aplicativo para visualização posterior.</Text>
        <Text style={estilos.texto}> O aplicativo poderá receber novos recursos conforme o feedback e
          demanda dos usuários.</Text>
        
        <Text style={estilos.texto}> O aplicativo poderá receber novos recursos conforme o feedback e
          demanda dos usuários.</Text>
        <Text style={estilos.texto}>Dá Hora Filmes &copy; 2024</Text>
        </ScrollView>
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