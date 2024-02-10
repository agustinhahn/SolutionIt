import { View, Text } from 'react-native'
import Stock from '../screens/Stock'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const StockStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Stock'
            screenOptions={
                ({route}) => {
                    return {
                        header: () => <Header title="Stock"/>
                    }
                }
            }
        >
            <Stack.Screen name='Stock' component={Stock} />
        </Stack.Navigator>
    )
}

export default StockStack