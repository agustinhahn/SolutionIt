import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Signup from '../screens/Signup'
import Login from '../screens/Login'
import Header from '../components/Header'
import { colors } from '../global/colors'


const Stack = createNativeStackNavigator()

const AuthStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='Login'
            screenOptions={({ route }) => {
                return {
                    header: () => <Header title={
                                        route.name === "Login" ? "Ingreso" :
                                        route.name === "Signup" ?  "Registro": null 
                    } />
                }
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
    )
}

export default AuthStack