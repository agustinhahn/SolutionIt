import { View, Text, StyleSheet } from 'react-native'
import {colors} from "../global/colors"

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
        backgroundColor: colors.blue6, 
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
    },
    text: {
        fontSize: 20, 
        fontWeight: 'bold',
        color: colors.blue2,
        paddingTop:20
    },
});