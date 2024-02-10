import { View, Text, FlatList, StyleSheet, SafeAreaView  } from 'react-native'
import StockItem from '../components/StockItem'
import { useSelector } from 'react-redux'
import { colors } from "../global/colors"

const Stock = () => {

    const stockEquipos = useSelector(state => state.it.value.products)

    return (
        <SafeAreaView  style={styles.container}>
            <FlatList
                data={stockEquipos}
                keyExtractor={item => (item && item.id) ? item.id.toString() : ''}
                renderItem={({ item }) =>(
                    <View style={styles.centeredContainer}>
                        <StockItem item={item} />
                    </View>)}
                    />
        </SafeAreaView >
    )
}

export default Stock

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