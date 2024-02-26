import { Alert, Pressable, ScrollView, StyleSheet, TextInput, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import SafeContainer from '../components/SafeContainer'
import { useState } from 'react';

export default function BuscarFilmes(){


    const [filmeDigitado, setFilmeDigitado] = useState("");

   const aoPressionarBotao = () => {
      if (filmeDigitado.trim() === "") {
        Alert.alert("você precisa digitar um filme")
      } else {
        Alert.alert(filmeDigitado)
      }
   }


    return(
        <SafeContainer>
            <View style={estilos.subContainer}>
            <ScrollView>
                <Text style={estilos.texto}>Star treck? Harry potter? Senhor dos anéis?</Text>

                <Text>Localize um filme que você viu ou gostaria de ver</Text>

                <View style={estilos.viewFlex}>
                    <Ionicons style={estilos.icon} name="film" size={24} color="black" />
                    <TextInput 
                    style={estilos.input}
                    onChangeText={(text) => setFilmeDigitado(text)}
                    onSubmitEditing={aoPressionarBotao}
                    placeholder='Digite o filme'
                    enterKeyHint='search'
                    clearButtonMode='while-editing'
                    />
                </View>

                <Pressable onPress={aoPressionarBotao} style={estilos.botao}>
                    <Text style={estilos.textBotao}>
                        Buscar
                    </Text>
                </Pressable>
            </ScrollView>
            </View>
        </SafeContainer>
)
}

const estilos = StyleSheet.create({
    subContainer: {
        flex: 0,
        padding: 16
    },
    texto: {
        marginVertical: 8
    },
    input: {
        color: "#2b2b2b",
        borderColor: "#2b2b2b",
        width: "80%",
        borderWidth: 2,
        paddingLeft: 10,
        paddingVertical: 5
    },
    viewFlex: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 15
    },
    icon: {
        paddingTop: 10
    },
    botao: {
        backgroundColor: "#2b2b2b",
        paddingVertical: 10,
    },
    textBotao: {
        color: "white",
        textAlign: "center"
    }
})