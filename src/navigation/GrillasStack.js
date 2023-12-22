import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Grillas from '../screens/Grillas'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const GrillasStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Grillas'
            screenOptions={
                ({route}) =>{
                    return {
                        header: ()=> <Header title="GRILLAS" />
                    }
                }
            }
        >
            <Stack.Screen name='Grillas' component={Grillas} />
        </Stack.Navigator>
    )
}

export default GrillasStack