import { View, Text, FlatList, StyleSheet, Button, Pressable } from 'react-native'
import AcordeonGrillas from './AcordeonGrillas'
import { useSelector, useDispatch } from 'react-redux';
import { usePostStockMutation, usePostTareaFinalizadaMutation, usePostActualizarTareasPendientesMutation } from '../app/services/itServices';
import { useEffect } from 'react';
import { limpiarTareaFinalizada } from '../features/itSlice';
import {colors} from "../global/colors"



const TareaFinalizada = ({ navigation, route }) => {
    const dispatch = useDispatch()

    const [cambioStock] = usePostStockMutation()
    const [tareaFinalizadaMut] = usePostTareaFinalizadaMutation()
    const [actualizarTareasPendientes] = usePostActualizarTareasPendientesMutation()
    const tareasFinalizadas = useSelector(state => state.it.value.tareasFinalizadas)
    const tareaFinalizada = useSelector((state) => state.it.value.nuevaTareaFinalizada)
    const trabajosPendientes = useSelector((state) => state.it.value.tareasPendientes)
    const productos = useSelector((state) => state.it.value.products )


    useEffect(() => {
        if (productos) {
            cambioStock({obj: productos})
        }
    }, [])

    useEffect(() => {
        if (tareaFinalizada) {
            tareaFinalizadaMut({ obj: tareaFinalizada })
            actualizarTareasPendientes({ obj: trabajosPendientes })
            dispatch(limpiarTareaFinalizada())
        }
    }, [])

    const tareasFin = useSelector(state => state.it.value.tareasFinalizadas)

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Pressable
                    style={styles.button1}>
                    <Text style={styles.buttonText}>FINALIZADAS</Text>
                </Pressable>
                <Pressable
                    onPress={() => {
                        navigation.navigate("Grillas")
                    }}
                    style={styles.button2}>
                    <Text style={styles.buttonText}>PENDIENTES</Text>
                </Pressable>
            </View>
            <FlatList
                data={tareasFin}
                keyExtractor={item => (item && item.id) ? item.id.toString() : ''}
                renderItem={({ item }) => (
                    <View style={styles.centeredContainer}>
                        <AcordeonGrillas trabajo={item} navigation={navigation} route={route} arrayUsado={tareasFinalizadas} />
                    </View>
                )}
            />
        </View>
    )
}

export default TareaFinalizada

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        zIndex: 1,
        backgroundColor: colors.backGroundBase 
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
        backgroundColor: colors.pendientesButton,
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginHorizontal: 5,
    },
    button2: {
        backgroundColor: colors.gray4,
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginHorizontal: 5,
    },
    buttonText: {
        color: colors.blue1,
        textAlign: 'center',
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});