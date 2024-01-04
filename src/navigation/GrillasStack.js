import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Grillas from '../screens/Grillas'
import Header from '../components/Header'
import FinInstalacion from '../components/FinInstalacion'
import TareaFinalizada from '../components/TareaFinalizada'

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
            <Stack.Screen name="FinInstalacion" component={FinInstalacion} />
            <Stack.Screen name="TareaFinalizada" component={TareaFinalizada} />
        </Stack.Navigator>
    )
}

export default GrillasStack