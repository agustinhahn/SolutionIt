import { View, Text, FlatList, StyleSheet, Button, Pressable, SafeAreaView } from 'react-native'
import { useGetAlertasQuery } from '../app/services/itServices'
import { useDispatch, useSelector } from 'react-redux'
import {setAlertas} from "../features/itSlice"
import { colors } from "../global/colors"
import SinAlertasPendientes from '../components/SinAlertasPendientes'
import { useEffect } from 'react'



const Alertas = () => {

    const dispatch = useDispatch();
    const alertasQuery = useGetAlertasQuery()

    useEffect(() => {
        if (alertasQuery.data) {
            dispatch(setAlertas(alertasQuery.data))
        }
    }, [alertasQuery])

    const fetchData = () => {
        alertasQuery.refetch()
    };

    const alertas = useSelector((state) => state.it.value.alertasRecibidas)

    return (
        <SafeAreaView style={styles.container}>
        <View>
            {
                alertas.length > 0 ? (
                    <FlatList
                        data={alertas}
                        keyExtractor={item => (item && item.id) ? item.id.toString() : ''}
                        renderItem={({ item }) => (
                            <View style={styles.centeredContainer}>
                                <View style={styles.alertView}>
                                    <Text style={styles.textAlert}>{item.text}</Text>
                                </View>
                            </View>
                        )}
                    />
                ) :
                    (
                        <View>
                            <SinAlertasPendientes recarga={fetchData} />
                        </View>
                    )
            }
        </View>
        </ SafeAreaView>
    )
}

export default Alertas


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backGroundBase,
        marginBottom: 50,
        flexGrow: 1
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    alertView: {
        padding: 20,
        marginTop: 20,
        minHeight: 40,
        backgroundColor: colors.lightBlue8,
        textAlignVertical: "center",
        marginVertical: 10
    },
    textAlert:{
        fontSize: 20,
        fontWeight: "bold",
        color: colors.backGroundBase
    }
});