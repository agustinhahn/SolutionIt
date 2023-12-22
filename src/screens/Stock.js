import { View, Text, FlatList } from 'react-native'
import stockEquipos from '../data/stock.json'
import StockItem from '../components/StockItem'

const Stock = () => {
    return (
        <>
            <FlatList 
                data={stockEquipos}
                keyExtractor={item => item.id}
                renderItem={({item}) => <StockItem item={item}/>}
            />
        </>
    )
}

export default Stock