import { View, Text, FlatList, StyleSheet, Pressable, SafeAreaView } from 'react-native'
import AcordeonGrillas from '../components/AcordeonGrillas'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setProducts, setTareasPendientes, setTareasFinalizadas,setMediosPago } from '../features/itSlice'
import { useGetStockQuery, useGetTareasFinalizadasQuery, useGetTrabajosQuery, useGetMediosDePagoQuery } from '../app/services/itServices'
import { colors } from "../global/colors"
import SinTrabajoPendiente from '../components/SinTrabajoPendiente'



const Grillas = ({ navigation, route }) => {

    const dispatch = useDispatch(); //hook usado para obtener una referencia para ejecutar funciones de redux
    //funciones para traer datos desde la bd
    const trabajosPendientesQuery = useGetTrabajosQuery()
    const { data: trabajosFinalizadosData } = useGetTareasFinalizadasQuery()
    const { data: stockEquipos } = useGetStockQuery()
    const { data: mediosPago } = useGetMediosDePagoQuery()

    //mediante useSelector llamamos a los datos en el estado especifico
    const tareasFinalizadas = useSelector(state => state.it.value.tareasFinalizadas)

    //cuando en haya modificado la variable y en ella haya datos, ejecutar una funcion enviando esos datos
    useEffect(() => {
        if (trabajosFinalizadosData) {
            dispatch(setTareasFinalizadas(trabajosFinalizadosData))
        }
    }, [trabajosFinalizadosData])

    useEffect(() => {
        if (mediosPago) {
            dispatch(setMediosPago(mediosPago))
        }
    }, [mediosPago])

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

    //cuando se ejecute , volver a pedir datos a la bd
    const fetchData = () => {
        trabajosPendientesQuery.refetch()
    };

    const trabajosPendientes = useSelector(state => state.it.value.tareasPendientes)

    return (
        //safeArea sirve para que el contenido no se superponga
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
                    //render de listas, principalmente para grandes contenidos, con pocas cosas conviene scrollview
                    <FlatList
                        //de donde sacar info
                        data={trabajosPendientes}
                        //cual es la id a renderizar
                        keyExtractor={item => (item && item.id) ? item.id.toString() : ''} 
                        renderItem={({ item }) => (
                            //como renderizar
                            <View style={styles.centeredContainer}>
                                <AcordeonGrillas trabajo={item} navigation={navigation} route={route} arrayUsado={trabajosPendientes} />
                            </View>
                        )}
                    />
                ) :
                    (
                        //si no hay trabajos pendientes , posibilidad de solicitar a la base de datos
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
        flex: 1, //el componente ocupa todo el espacio disponible dentro de su contenedor
        width: '100%', //ancho maximo en referencia a su contenedor padre
        zIndex: 1, //define profundidad, con 1 esta por encima de los otros elementos
        backgroundColor: colors.backGroundBase,
        marginBottom: 50 //margen de abajo
    },
    buttonContainer: {
        flexDirection: 'row', //los elementos van horizontalmente
        justifyContent: 'space-between', //separacion entre elementos
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1, //establece ancho del borde bajo
        borderBottomColor: '#ccc', //establece color del borde
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