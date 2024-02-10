import { StyleSheet, Text, View, Pressable } from 'react-native'
import {colors} from "../global/colors"

const AddButton = ({ title, onPress }) => {
    return (
        <Pressable style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}


export default AddButton


const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightBlue9,
        width: "70%",
        paddingVertical: 8,
        margin: 10,
        borderRadius: 20, 
        borderRadius: 50, 
        // Para Android
        elevation: 10,
        // Para iOS
        shadowColor: colors.lightBlue7,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    text: {
        color: colors.gray1,
        textAlign: "center",
        fontSize: 18,
    }
})