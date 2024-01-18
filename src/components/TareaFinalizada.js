import { View, Text, FlatList, StyleSheet, Button, Pressable } from 'react-native'
import AcordeonGrillas from './AcordeonGrillas'
import { usePostStockMutation } from '../app/services/itServices';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


const TareaFinalizada = ({ navigation, route }) => {
    const stockActual = useSelector(state => state.it.value.products)
    const [triggerPostStock] = usePostStockMutation()
    const tareasFinalizadas = useSelector((state) => state.it.value.tareasFinalizadas)
    
    useEffect(()=>{
        triggerPostStock({
            id: "1",
            titulo: "nano loco AC",
            cantidad: "3",
        })
    },[stockActual])

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Pressable 
                style={styles.button1}>
                    <Text style={styles.buttonText}>FINALIZADAS</Text>
                </Pressable>
                <Pressable 
                onPress={()=> navigation.navigate("Grillas")}
                style={styles.button2}>
                    <Text style={styles.buttonText}>PENDIENTES</Text>
                </Pressable>
            </View>
            <FlatList
                data={tareasFinalizadas}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <AcordeonGrillas trabajo={item} navigation={navigation} route={route} arrayUsado = {tareasFinalizadas}/>}
            />
        </View>
    )
}

export default TareaFinalizada

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
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
        backgroundColor: 'red',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginHorizontal: 5,
    },
    button2: {
        backgroundColor: 'grey',
        padding: 10,
        borderRadius: 5,
        flex: 1,
        marginHorizontal: 5,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
});