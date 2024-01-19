import { View, Text, FlatList } from 'react-native'
import StockItem from '../components/StockItem'
import { useSelector } from 'react-redux'

const Stock = () => {

    const stockEquipos = useSelector(state => state.it.value.products)

    return (
        <>
            <FlatList
                data={stockEquipos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <StockItem item={item} />}
            />
        </>
    )
}

export default Stock