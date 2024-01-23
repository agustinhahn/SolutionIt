import { View, Text, FlatList, StyleSheet, Button, Pressable } from 'react-native'
import AcordeonGrillas from '../components/AcordeonGrillas'
import { useGetTrabajosQuery } from "../app/services/itServices"
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { setProducts, setTareasPendientes } from '../features/itSlice'
import { useGetStockQuery } from '../app/services/itServices'
import { useSelector } from 'react-redux'
import Loader from '../components/Loader'



const Grillas = ({ navigation, route }) => {

    const dispatch = useDispatch();
    const { data: trabajosPendientesData } = useGetTrabajosQuery()
    const { data: stockEquipos } = useGetStockQuery()

    useEffect(() => {
        if (stockEquipos) {
            dispatch(setProducts(stockEquipos));
        }
    }, [stockEquipos, dispatch]);

    useEffect(() => {
        if(trabajosPendientesData){
            dispatch(setTareasPendientes(trabajosPendientesData))
        }
    }, [trabajosPendientesData])

    const trabajosPendientes = useSelector(state => state.it.value.tareasPendientes)
    console.log(trabajosPendientes)
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Pressable
                    onPress={() => navigation.navigate("TareaFinalizada")}
                    style={styles.button1}>
                    <Text style={styles.buttonText}>FINALIZADAS</Text>
                </Pressable>
                <Pressable style={styles.button2}>
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
                        <Loader />
                    )
            }
        </View>
    )
}

export default Grillas

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        zIndex: 1
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
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginHorizontal: 5,
    },
    button2: {
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginHorizontal: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});