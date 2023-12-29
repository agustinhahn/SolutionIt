import { View, Text, FlatList, StyleSheet } from 'react-native'
import trabajos from '../data/trabajos.json'
import AcordeonGrillas from '../components/AcordeonGrillas'

const Grillas = ({navigation,route}) => {
    
    return (
        <View style={styles.container}>
            <FlatList
                data={trabajos}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => <AcordeonGrillas trabajo={item} navigation={navigation} route={route} />}
            />
        </View>
    )
}

export default Grillas

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:"100%"
    }
})