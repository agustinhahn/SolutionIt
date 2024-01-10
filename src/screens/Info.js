import { View, StyleSheet } from 'react-native'
import Acordeon from '../components/Acordeon'
import { useGetInfoAbonoAntenaQuery, useGetInfoAbonoFibraQuery, useGetInfoInstaQuery, useGetInfoPreciosQuery } from '../app/services/itServices'

const Info = () => {

    const {data:infoPrecios} = useGetInfoPreciosQuery()
    const {data: infoAbonoAntena} = useGetInfoAbonoAntenaQuery()
    const {data: infoAbonoFibra} = useGetInfoAbonoFibraQuery()
    const {data: infoPreciosInsta} = useGetInfoInstaQuery()

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