import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Info from '../screens/Info'
import Header from '../components/Header'

const Stack = createNativeStackNavigator()

const InfoStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Info'
            screenOptions={
                ({route}) => {
                    return {
                        header: ()=> <Header title="Costos generales"/>
                    }
                }
            }
        >
            <Stack.Screen name='Info' component={Info} />
        </Stack.Navigator>
    )
}

export default InfoStack