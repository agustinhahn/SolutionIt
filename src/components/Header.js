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
        backgroundColor: '#3498DB', 
        width: '100%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
    },
    text: {
        fontSize: 24, 
        fontWeight: 'bold',
        color: '#FFFFFF', 
    },
});