import { View, Text, StyleSheet } from 'react-native'
import { colors } from "../global/colors"

const StockItem = ({ item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{item.titulo}</Text>
                <Text style={styles.quantity}>{item.cantidad}</Text>
            </View>
        </View>
    )
}

export default StockItem

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.backGroundBase,
        marginVertical: 8,
        elevation: 2,
        marginTop: 20,
        width: "90%"
    },
    card: {
        backgroundColor: "#ec7d7d",
        borderRadius: 8,
        elevation: 2,
        padding: 16,
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5, 
        // Para Android
        elevation: 10,
        // Para iOS
        shadowColor: "#cc3636",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    quantity: {
        fontSize: 16,
        color: colors.gray7,
    },
});