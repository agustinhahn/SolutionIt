import { View, Text, FlatList, StyleSheet } from 'react-native'
import StockItem from '../components/StockItem'
import { useSelector } from 'react-redux'
import { colors } from "../global/colors"

const Stock = () => {

    const stockEquipos = useSelector(state => state.it.value.products)

    return (
        <View style={styles.container}>
            <FlatList
                data={stockEquipos}
                keyExtractor={item => (item && item.id) ? item.id.toString() : ''}
                renderItem={({ item }) =>(
                    <View style={styles.centeredContainer}>
                        <StockItem item={item} />
                    </View>)}
                    />
        </View>
    )
}

export default Stock

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: colors.backGroundBase,
    },
    centeredContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})