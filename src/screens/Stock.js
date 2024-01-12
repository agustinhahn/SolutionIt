import { View, Text, FlatList } from 'react-native'
import StockItem from '../components/StockItem'
import { useGetStockQuery } from '../app/services/itServices'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import {setProducts } from '../features/itSlice'


const Stock = () => {
    const dispatch = useDispatch();
    const { data: stockEquipos } = useGetStockQuery()

    useEffect(() => {
        if (stockEquipos) {
            dispatch(setProducts(stockEquipos));
        }
    }, [stockEquipos, dispatch]);

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