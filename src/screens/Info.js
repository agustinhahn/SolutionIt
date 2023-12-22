import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Acordeon from '../components/Acordeon'
import infoPreciosInsta from "../data/infoInsta.json"
import infoPrecios from "../data/infoPrecios.json"
import infoAbonoFibra from "../data/infoAbonoFibra.json"
import infoAbonoAntena from "../data/infoAbonoAntena.json"

const Info = () => {
    return (
        <View style={styles.container}>
            <Acordeon tituloAc="Precios instalaciones" valores={infoPreciosInsta} />
            <Acordeon tituloAc="Precios productos" valores={infoPrecios} />
            <Acordeon tituloAc="Abonos fibra" valores={infoAbonoFibra} />
            <Acordeon tituloAc="Abonos antena" valores={infoAbonoAntena} />
        </View>
    )
}

export default Info

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems:"center"
    }
})