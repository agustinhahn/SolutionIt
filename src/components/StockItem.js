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
        backgroundColor: colors.lightBlue8,
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
        shadowColor: colors.lightBlue6,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color:colors.gray1
    },
    quantity: {
        fontSize: 18,
        color: colors.gray1,
    },
});