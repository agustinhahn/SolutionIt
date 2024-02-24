import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import Alertas from '../screens/Alertas'

const Stack = createNativeStackNavigator()

const AlertaStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Alertas'
            screenOptions={
                ({route}) => {
                    return {
                        header: ()=> <Header title="Alertas / Mensajes"/>
                    }
                }
            }
        >
            <Stack.Screen name='Alertas' component={Alertas} />
        </Stack.Navigator>
    )
}

export default AlertaStack