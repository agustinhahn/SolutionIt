import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Header = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        backgroundColor: "blue",
        width: "100%",
        height: 80,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontSize: 20
    }
})