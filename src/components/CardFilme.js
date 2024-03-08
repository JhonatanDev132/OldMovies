import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import logo from "../../assets/images/scream.png"

export default function CardFilme() {
  return (
    <View style={estilos.card}>
      <Image style={estilos.image} source={logo}/>
    </View>
  )
}

const estilos = StyleSheet.create({
    image:{
        width: 150,
        height: 150,
        marginVertical: 8
    },
})