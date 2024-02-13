import { View, Text, FlatList, StyleSheet, Button, Pressable, SafeAreaView } from 'react-native'
import AcordeonGrillas from '../components/AcordeonGrillas'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { setProducts, setTareasPendientes, setTareasFinalizadas } from '../features/itSlice'
import { useGetStockQuery, useGetTareasFinalizadasQuery, useGetTrabajosQuery } from '../app/services/itServices'
import { colors } from "../global/colors"
import SinTrabajoPendiente from '../components/SinTrabajoPendiente'



const Grillas = ({ navigation, route }) => {

    const dispatch = useDispatch();
    const trabajosPendientesQuery = useGetTrabajosQuery()
    const { data: trabajosFinalizadosData } = useGetTareasFinalizadasQuery()
    const { data: stockEquipos } = useGetStockQuery()
    const tareasFinalizadas = useSelector(state => state.it.value.tareasFinalizadas)

    useEffect(() => {
        if (trabajosFinalizadosData) {
            dispatch(setTareasFinalizadas(trabajosFinalizadosData))
        }
    }, [trabajosFinalizadosData])

    useEffect(() => {
        if (stockEquipos) {
            dispatch(setProducts(stockEquipos));
        }
    }, [stockEquipos, dispatch]);

    useEffect(() => {
        if (trabajosPendientesQuery.data) {
            dispatch(setTareasPendientes(trabajosPendientesQuery.data))
        }
    }, [trabajosPendientesQuery])

    const fetchData = () => {
        trabajosPendientesQuery.refetch()
    };

    const trabajosPendientes = useSelector(state => state.it.value.tareasPendientes)

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonContainer}>
                <Pressable
                    onPress={() => {
                        if (tareasFinalizadas.length > 0) {
                            navigation.navigate("TareaFinalizada")
                        }
                    }
                    }
                    style={styles.button1}>
                    <Text style={styles.buttonText}>FINALIZADAS</Text>
                </Pressable>
                <Pressable style={styles.button2} >
                    <Text style={styles.buttonText}>PENDIENTES</Text>
                </Pressable>
            </View>
            {
                trabajosPendientes.length > 0 ? (
                    <FlatList
                        data={trabajosPendientes}
                        keyExtractor={item => (item && item.id) ? item.id.toString() : ''}
                        renderItem={({ item }) => (
                            <View style={styles.centeredContainer}>
                                <AcordeonGrillas trabajo={item} navigation={navigation} route={route} arrayUsado={trabajosPendientes} />
                            </View>
                        )}
                    />
                ) :
                    (
                        <View>
                            <SinTrabajoPendiente recarga={fetchData} />
                        </View>
                    )
            }
        </SafeAreaView >
    )
}

export default Grillas

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        zIndex: 1,
        backgroundColor: colors.backGroundBase,
        marginBottom: 50
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 15,
        marginTop: 10
    },
    button1: {
        backgroundColor: colors.gray4,
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginHorizontal: 5,
    },
    button2: {
        backgroundColor: colors.pendientesButton,
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginHorizontal: 5,
    },
    buttonText: {
        color: colors.gray1,
        textAlign: 'center',
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});