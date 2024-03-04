import { StyleSheet, Text, View } from 'react-native';
import SafeContainer from '../components/SafeContainer';
import {api, apiKey} from '../services/api-moviedb';
import { useEffect, useState  } from 'react';


export default function Resultados({ route }) {
  /* State para gerenciar os resultados da busca na API */
  const [resultados, setResultados] = useState([]);


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
        console.log(resposta.data.results);
      } catch (error) {
        console.error("Deu ruim: "+ error.message);
      }
    }
    buscarFilmes();
  }, [])
  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.texto}>Você buscou por: {filme}</Text>
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
        marginVertical: 8
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