import { StyleSheet, Text, View, Image, Linking, Pressable, ScrollView, Alert } from 'react-native'
import SafeContainer from '../components/SafeContainer'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';



export default function Favoritos() {
  /* State para registrar os dados carregados do storage */
  const [listaFavoritos, setListaFavoritos] = useState([]);

  /* useEffect será disparado assim que o usuário entrar na tela
  Favoritos (postanto, somente uma vez)*/

  useEffect( () => {
    const carregarFavoritos = async () => {
      try {
        /* Acessamos o storage criado previamente e guardamos
        as strings de dados. */
       const dados = await AsyncStorage.getItem("@favoritosoldmovies");

       /* Se houver dados, transformamos em objetos (JSON.parse)
       e atualizamos o state com a lista de favoritos */
       if(dados){
        setListaFavoritos(JSON.parse(dados));
       }
      } catch (error) {
       console.error("Erro ao carregar os dados: "+error);
       Alert.alert("Erro", "Erro ao carregar os dados") 
      }
    };

    carregarFavoritos();
  }, [])

  console.log(listaFavoritos);

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
         <View style={estilos.viewFavoritos}>
          <Text style={estilos.texto}>Quantidade: {listaFavoritos.length}</Text>

          <Pressable style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="trash-outline" size={16} /> Excluir favoritos
            </Text>
          </Pressable>
         </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map( (filme) => {
            return(
             <View style={estilos.item} >
              <Pressable style={estilos.botaoFilme}>
                <Text style={estilos.titulo}>{filme.title}</Text>
              </Pressable>
              <Pressable style={estilos.botaoExcluir}>
                <Ionicons name='trash' size={16}/>
              </Pressable>
            </View>
            )
          } )}
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
    texto: {
      marginTop: 6,
    },
    viewFavoritos: {
      flexDirection: "row",
      marginVertical: 8,
      marginBottom: 16,
      justifyContent: "space-between"
    },
    textoBotao: {
      padding: 5,
      color: "red"
    },
    botao:{
      borderWidth: 1,
      borderColor: "red"
    },
    item: {
      flexDirection: "row",
      justifyContent: "space-between"
    }
})