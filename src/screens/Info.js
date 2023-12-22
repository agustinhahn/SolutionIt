import { View, Text } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Acordeon from '../components/Acordeon'
import infoPreciosInsta from "../data/infoInsta.json"
import infoPrecios from "../data/infoPrecios.json"
import infoAbonoFibra from "../data/infoAbonoFibra.json"
import infoAbonoAntena from "../data/infoAbonoAntena.json"

const Info = () => {
    return (
        <>
        <Header title="INFORMACION"/>
        <Acordeon tituloAc="Precios instalaciones" valores={infoPreciosInsta} />
        <Acordeon tituloAc="Precios productos" valores={infoPrecios} />
        <Acordeon tituloAc="Abonos fibra" valores={infoAbonoFibra} />
        <Acordeon tituloAc="Abonos antena" valores={infoAbonoAntena} />
        </>
    )
}

export default Info