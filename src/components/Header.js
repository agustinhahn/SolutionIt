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
        backgroundColor: colors.backGroundBase, 
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 4,
    },
    text: {
        fontSize: 27, 
        fontWeight: 'bold',
        color: colors.lightBlue10,
        paddingTop:20,
        fontFamily: "RobotoSlabMedium"
    },
});