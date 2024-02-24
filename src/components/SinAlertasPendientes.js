import { View, Text, Pressable, StyleSheet } from 'react-native';
import { colors } from '../global/colors';

const SinAlertasPendientes = ({recarga}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Actualmente no nada para mostrar</Text>
            <Pressable style={styles.button} onPress={()=>recarga()}>
                <Text style={styles.buttonText}>RECARGAR ALERTAS</Text>
            </Pressable>
        </View>
    );
};

export default SinAlertasPendientes;

const styles = StyleSheet.create({
    container:{
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
        color: colors.gray5,
    },
    button: {
        backgroundColor: colors.lightBlue8,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
        width: "50%",
        alignSelf: "center",
        // Para Android
        elevation: 10,
        // Para iOS
        shadowColor: colors.lightBlue6,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    buttonText: {
        color: colors.backGroundBase,
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: "center"
    },
});
