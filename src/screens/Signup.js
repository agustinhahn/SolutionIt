import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { useSignupMutation } from '../app/services/auth'
import { useDispatch } from 'react-redux'
import { setUser } from '../features/auth/authSlice'
import {signupSchema} from "../validations/signupSchema"
import SubmitButton from '../components/SubmitButton'
import InputForm from '../components/InputForm'
import { colors } from '../global/colors'

const Signup = ({ navigation }) => {
    const dispatch = useDispatch()
    const [triggerSignup, { data, isError, isSuccess, error, isLoading }] = useSignupMutation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("")

    useEffect(() => {
        if (isSuccess) dispatch(setUser(data))
        if (isError) console.log(error)
    }, [data, isError, isSuccess])



    const onSubmit = () => {
        try {
            setEmailError("")
            setPasswordError("")
            setConfirmPasswordError("")
            signupSchema.validateSync({ email, password, confirmPassword })
            triggerSignup({ email, password })
        } catch (error) {
            switch (error.path) {
                case "email":
                    setEmailError(error.message)
                    break
                case "password":
                    setPasswordError(error.message)
                    break
                case "confirmPassword":
                    setConfirmPasswordError(error.message)
                    break
                default:
                    break
            }
        }
    }


    return (

            <View style={styles.container}>
                {/* <Text style={styles.title}>Registrate</Text> */}
                <InputForm
                    label="Email"
                    value={email}
                    onChangeText={(t) => setEmail(t)}
                    isSecure={false}
                    error={emailError}
                />
                <InputForm
                    label="clave"
                    value={password}
                    onChangeText={(t) => setPassword(t)}
                    isSecure={true}
                    error={passwordError}
                />
                <InputForm
                    label="Confirmar clave"
                    value={confirmPassword}
                    onChangeText={(t) => setConfirmPassword(t)}
                    isSecure={true}
                    error={confirmPasswordError}
                />
                <SubmitButton title="Enviar" onPress={onSubmit}
                />
                <Text style={styles.sub}>Ya tienes cuenta ?</Text>
                <Pressable onPress={() => navigation.navigate("Login")}>
                    <Text style={styles.subLink}>Login</Text>
                </Pressable>
            </View>

    )
}


export default Signup


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: colors.backGroundBase,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333", // Cambiar el color del texto,
        margin: 20,
    },
    sub: {
        fontSize: 12,
        color: colors.gray5,
        marginTop: 5,
        fontFamily: "RobotoSlabMedium",
    },
    subLink: {
        fontSize: 16,
        color: colors.gray7,
        margin: 5,
        fontFamily: "RobotoSlabMedium",
        fontWeight: 'bold',
                // Para Android
                elevation: 10,
                // Para iOS
                shadowColor: colors.gray10,
                shadowOffset: {
                    width: 0,
                    height: 5,
                },
                shadowOpacity: 0.3,
                shadowRadius: 5,
    }
})