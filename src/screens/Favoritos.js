import { StyleSheet, Text, View, Image, Linking, Pressable, ScrollView, Alert } from 'react-native'
import SafeContainer from '../components/SafeContainer'
import { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';



export default function Favoritos({ navigation, filme }) {
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

  const excluirTodosFavoritos = async () => {
    Alert.alert("Exluir TODOS?",
     "Você tem certeza que deseja excluir tudo?",
     [
      /* Propriedades style (aparência do botão):
      SOMENTE NO IOS que faz diferença */
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Confirmar",
        style: "destrutive",
        onPress: async()=>{
          // Removemos nosso storage de favoritos
          await AsyncStorage.removeItem("@favoritosoldmovies");

          // Atualizamos o state para serem removidos da tela
          setListaFavoritos([]);
        }
      }
     ]
     );
  }

  const excluirFavorito = async (filmeId, filmeTitle) => {
    Alert.alert("Excluir filme do favorito?", 
    "Tem certeza que você deseja excluir esse filme dos favoritos?",
    [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Confirmar",
        style: "destructive",

        onPress: async()=>{
          try {

            /* Gerar uma nova lista de favoritos EXCETO o filme que será removido */
            const novosFavoritos = listaFavoritos.filter((filme) => filme.id !== filmeId);
            
            /* Usamos para conseguir mexer na memória física */
            await AsyncStorage.setItem('@favoritosoldmovies', JSON.stringify(novosFavoritos))
            
            /* Atualiza o state com os dados da nova lista
            SEM o filme removido */
            setListaFavoritos(novosFavoritos)
            Alert.alert(`${filmeTitle} excluido dos favoritos`);
          } catch (error) {
            console.error('Erro ao excluir o filme dos favoritos: ', error);
          }
        }
      }
    ]
    )
  }

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
         <View style={estilos.viewFavoritos}>
          <Text style={estilos.texto}>Quantidade: {listaFavoritos.length}</Text>
        
        {
          listaFavoritos.length > 0 && (
          <Pressable onPress={excluirTodosFavoritos} style={estilos.botao}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="trash-outline" size={16} /> Excluir favoritos
            </Text>
          </Pressable>
          )
        }
         </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map( (filme) => {
            return(
             <View key={filme.id} style={estilos.item} >
              <Pressable 
              style={estilos.botaoFilme}
              onPress={()=>{ navigation.navigate("Detalhes", {filme}) }}rt
              >
                <Text style={estilos.titulo}>{filme.title}</Text>
              </Pressable>
              <Pressable 
              style={estilos.botaoExcluir}
              onPress={() => excluirFavorito(filme.id, filme.title)}
              >
                <Ionicons name='trash' size={16} color="white"/>
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
      marginTop: 3,
      fontSize: 18
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
      justifyContent: "space-between",
      backgroundColor: "#DDDEEE",
      marginBottom: 8,
      borderRadius: 2,
      alignItems: "center",
      padding: 10,
      borderWidth: 1
    },
    botaoExcluir: {
      backgroundColor: "red",
      padding: 6,
      borderRadius: 2,
      marginLeft: 2
    },
    botaoFilme: {
      flex: 1
    },
    titulo: {
      fontSize: 14
    }
})