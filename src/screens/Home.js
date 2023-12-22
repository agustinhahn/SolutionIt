import { View, Text, TextInput,StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'

const Home = () => {

    const [text, setText] = useState("")

    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.textInput}
                onChangeText={setText}
                value={text}
                placeholder="Ingresar dni"
                placeholderTextColor="#A0A0A0"
            />
            <Pressable style={styles.button}>
                <Text style={styles.buttonText}>INGRESAR</Text>
            </Pressable>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#FFFFFF', // Color de fondo
    },
    textInput: {
        width: '50%',
        height: 40,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#CCCCCC',
        borderRadius: 5,
        fontSize: 16,
        color: '#333333', // Color del texto
    },
    button: {
        width: '50%',
        height: 40,
        backgroundColor: '#3498DB', // Color de fondo del botón
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF', // Color del texto del botón
        fontSize: 16,
        fontWeight: 'bold',
    },
});