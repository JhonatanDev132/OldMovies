import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import SafeContainer from '../components/SafeContainer';
import {api, apiKey} from '../services/api-moviedb';
import { useEffect, useState  } from 'react';
import CardFilme from '../components/CardFilme';
import Separador from '../components/Separador';
import NaoLocalizado from '../components/NaoLocalizado';



export default function Resultados({ route }) {
  /* State para gerenciar os resultados da busca na API */
  const [resultados, setResultados] = useState([]);

  const [loading, setLoading] = useState(true);


  // Capturando o parâmetro filme vindo de BuscarFilmes
  const { filme } = route.params;

  useEffect(() => {
    async function buscarFilmes(){
      try {
        const resposta = await api.get(`/search/movie`, {
          params: {
            include_adult: false,
            language: "pt-BR",
            query: filme,
            api_key: apiKey
          }
        })
        setResultados(resposta.data.results);

        setLoading(false)
      } catch (error) {
        console.error("Deu ruim: "+ error.message);
      }
    }
    buscarFilmes();
  }, [])
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.texto}>Você buscou por: <Text style={estilos.filme}>{filme}</Text></Text>

        {loading && <ActivityIndicator size="large" color="#2B2B2B"/>}

        {!loading && (
          <View style={estilos.viewFilmes}>
          <FlatList 
          // Prop data apontando para o state contendo os dados para a FlatList
          data={resultados}

          // Extraindo a chave/key de cada registro/item/filme único
          keyExtractor={(item) => item.id} 

          // Prop que irá renderizar cada item/filme em um componente
          renderItem={ ({item}) => {
            return <CardFilme filme={item}/>
          } }
          ListEmptyComponent={NaoLocalizado}
          ItemSeparatorComponent={Separador} 
          />
        </View>)}
      </View>
    </SafeContainer>
  )
}

const estilos = StyleSheet.create({
    viewFilmes: {
      marginVertical: 0,
    },
    subContainer: {
        flex: 0,
        padding: 16,
        width: "100%"
    },
    texto: {
        marginBottom: 10,
        textAlign: 'center'
    },
    filme: {
      fontWeight: "bold"
    },
    nomeApp: {
    fontWeight: "bold",
    color: "#2b2b2b"
    },
    tmdb: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20
    }
})