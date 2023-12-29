import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Grillas from '../screens/Grillas'
import Header from '../components/Header'
import FinalizarTarea from '../components/FinalizarTarea'

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
            <Stack.Screen name="FinalizarGrilla" component={FinalizarTarea} />
        </Stack.Navigator>
    )
}

export default GrillasStack