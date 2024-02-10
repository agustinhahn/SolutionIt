import { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import InputForm from '../components/InputForm'
import SubmitButton from '../components/SubmitButton'
import { useLoginMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import {colors} from "../global/colors"




const Login = ({ navigation }) => {
    const dispatch = useDispatch()
    const [triggerLogin, { data, isError, isSuccess, error, isLoading }] = useLoginMutation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        if (isSuccess) dispatch(setUser(data))
        if (isError) console.log(error)
    }, [data, isError, isSuccess])


    const onSubmit = () => {
        triggerLogin({ email, password })
    }
    return (
            <View style={styles.container}>
                {/* <Text style={styles.title} >Ingresar</Text> */}
                <InputForm
                    label="Email"
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error=""
                />
                <InputForm
                    label="Password"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error=""
                />
                <SubmitButton onPress={onSubmit} title="Enviar" />
                <Text style={styles.sub}>Aun no tienes cuenta?</Text>
                <Pressable onPress={() => navigation.navigate("Signup")} >
                    <Text style={styles.subLink}>Registrate</Text>
                </Pressable>
            </View>
    )
}


export default Login


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.blue4,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333", // Cambiar el color del texto,
        margin:20
    },
    sub: {
        fontSize: 16,
        color: "#555", // Cambiar el color del texto
        marginTop: 5,
    },
    subLink: {
        fontSize: 14,
        color: "blue",
        margin: 5
    }
})