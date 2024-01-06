import { View, Text, FlatList, StyleSheet, Button, Pressable } from 'react-native'
import AcordeonGrillas from '../components/AcordeonGrillas'
import { useSelector} from 'react-redux'


const Grillas = ({ navigation, route }) => {

    const trabajosPendientes = useSelector((state) => state.it.value.tareasPendientes)

    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Pressable 
                onPress={()=> navigation.navigate("TareaFinalizada")}
                style={styles.button1}>
                    <Text style={styles.buttonText}>FINALIZADAS</Text>
                </Pressable>
                <Pressable style={styles.button2}>
                    <Text style={styles.buttonText}>PENDIENTES</Text>
                </Pressable>
            </View>
            <FlatList
                data={trabajosPendientes}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <AcordeonGrillas trabajo={item} navigation={navigation} route={route} arrayUsado = {trabajosPendientes} />}
            />
        </View>
    )
}

export default Grillas

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