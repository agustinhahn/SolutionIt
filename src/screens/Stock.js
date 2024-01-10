import { View, Text, FlatList } from 'react-native'
import StockItem from '../components/StockItem'
import { useGetStockQuery } from '../app/services/itServices'


const Stock = () => {

    const {data: stockEquipos} = useGetStockQuery()

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