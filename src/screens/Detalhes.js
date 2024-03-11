
// rnfs
import { StyleSheet, Text, View } from "react-native";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";
import { ImageBackground } from "react-native";
import { ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


export default function Detalhes({route}) {
  const { filme } = route.params;
  const {backdrop_path, release_date, overview} = filme;
  const formataData = (data) => {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  }


  return (
    <View style={estilos.subcontainer}>
      
      <ImageBackground style={estilos.imagemFundo} source={backdrop_path ? { uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}`, } : imagemAlternativa}><LinearGradient
      colors={['rgba(0,0,0,0.8)', 'transparent']}
      style={estilos.background}
      >
        <Text style={estilos.titulo}>{filme.title}</Text>
      </LinearGradient>
      </ImageBackground>
      

      <View style={estilos.conteudo}>
        <ScrollView>
          <Text style={estilos.avaliacao}>Avaliação: ⭐ {filme.vote_average}</Text>
          <Text style={estilos.lancamento}>Lançamento: {release_date ? formataData(release_date) : " Indisponível"}</Text>
          <Text style={[estilos.texto, estilos.descricao]}>{overview || (
              <Text style={{ fontStyle: "italic" }}>Filme sem Descrição</Text>
            )}</Text>
          
        </ScrollView>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  subcontainer:{
    flex: 1,
    width: "100%",
    padding: 0,
  },
  imagemFundo:{
    height: 200,
    justifyContent: 'flex-start',
  },
  titulo:{
    color: "#EEEEEE",
    fontSize: 25,
    padding: 16,
    textAlign: "left",
    fontWeight: "bold"
  },
  conteudo:{
    padding: 16,
    flex: 1
  },
  lancamento:{
    padding: 6,
    color: "#2b2b2b"
  },
  avaliacao:{
    color: "blue",
    padding: 6,
    fontSize: 18
  },
  descricao: {
    fontSize: 16,
    padding: 6,
    color: "#2b2b2b"
  },
  background: {
    height: 150,
  }
});