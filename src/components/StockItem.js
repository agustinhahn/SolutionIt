import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const StockItem = ({item}) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{item.titulo}</Text>
            <Text style={styles.quantity}>{item.cantidad}</Text>
        </View>
    )
}

export default StockItem

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        elevation: 2,
        padding: 16,
        margin: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    quantity: {
        fontSize: 16,
        color: '#555555',
    },
});