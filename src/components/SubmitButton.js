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
        backgroundColor: colors.blue6,
        padding: 10,
        alignItems: "center",
        borderRadius: 30,
    },
    text: {
        textAlign: "center",
        color: "white",
        fontSize: 18
    }
})