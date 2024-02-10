import { View, StyleSheet , SafeAreaView, FlatList  } from 'react-native'
import Acordeon from '../components/Acordeon'
import {colors} from "../global/colors"
import { useGetInfoGeneralQuery } from '../app/services/itServices'

const Info = () => {

    const {data:infoGeneral} = useGetInfoGeneralQuery()

    return (
        <SafeAreaView  style={styles.container}>
            <FlatList
                data={infoGeneral}
                keyExtractor={item => (item && item.id) ? item.id.toString() : ''}
                renderItem={({ item }) =>(
                    <View style={styles.centeredContainer}>
                        <Acordeon valores={item.content} tituloAc={item.id} />
                    </View>)}
                    />
        </SafeAreaView >
    )
}

export default Info

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.backGroundBase,
        marginBottom: 70
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})