import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Header from '../components/Header'
import MyProfile from "../screens/MyProfile"
import ImageSelector from "../screens/ImageSelector"

const Stack = createNativeStackNavigator()

const ProfileStack = () => {
    return (
        <Stack.Navigator
            initialRouteName='MyProfile'
            screenOptions={
                ({ route }) => {
                    return {
                        header: () => <Header title="PERFIL" />
                    }
                }
            }
        >
            <Stack.Screen name="MyProfile" component={MyProfile} />
            <Stack.Screen name="ImageSelector" component={ImageSelector} />
        </Stack.Navigator>
    )
}

export default ProfileStack