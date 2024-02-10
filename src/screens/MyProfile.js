import { StyleSheet, View, Image, Text, Pressable } from 'react-native'
import { useGetProfileImageQuery } from '../app/services/itServices'
import { useSelector } from 'react-redux'
import AddButton from '../components/AddButton'
import {colors} from "../global/colors"


const MyProfile = ({ navigation }) => {
    const localId = useSelector(state => state.auth.value.localId)
    const emailData = useSelector(state => state.auth.value.email)
    const { data } = useGetProfileImageQuery(localId)

    return (
        <View style={styles.container}>
            <Image
                source={data ? { uri: data.image } : require("../../assets/user.png")}
                style={styles.image}
                resizeMode='cover'
            />
            <Text style={styles.textData}>{emailData}</Text>
            <AddButton title={"Actualizar foto de perfil"} onPress={() => navigation.navigate("ImageSelector")} />
            <AddButton title={"SALIR"} onPress={()=>console.log("boton para salir")} />
        </View>
    )
}


export default MyProfile


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: colors.backGroundBase
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100, // Asegúrate de que el radio sea la mitad del ancho o alto, según corresponda
        overflow: 'hidden', // Esto asegura que la imagen respete el borde redondeado
        marginTop: 20,
        borderWidth: 0.1
    },
    textData:{
        margin: 10,
        color: colors.gray5
    }
})