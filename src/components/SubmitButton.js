import { StyleSheet, Text, Pressable } from 'react-native'
import {colors} from "../global/colors"

const SubmitButton = ({ title, onPress }) => {

    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}


export default SubmitButton


const styles = StyleSheet.create({
    button: {
        width: "60%",
        margin:  15,
        backgroundColor: colors.lightBlue8,
        padding: 10,
        alignItems: "center",
        borderRadius: 30, 
        // Para Android
        elevation: 10,
        // Para iOS
        shadowColor: colors.lightBlue6,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    text: {
        textAlign: "center",
        color: colors.gray1,
        fontSize: 18
    }
})