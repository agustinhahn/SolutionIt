import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from "@expo/vector-icons"
import Home from '../screens/Home'
import Grillas from '../screens/Grillas'
import Info from '../screens/Info'
import Stock from '../screens/Stock'
import TabIcon from '../components/TabIcon';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon icon="home" label="home" focused={focused} />
                }}
            />
            <Tab.Screen 
                name='Grillas'
                component={Grillas}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon icon="clipboard" label="work" focused={focused} />
                }}
            />
            <Tab.Screen 
                name='Info'
                component={Info}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon icon="info" label="info" focused={focused} />
                }}
            />
            <Tab.Screen 
                name='Stock'
                component={Stock}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon icon="box" label="stock" focused={focused} />
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
    )
}

export default TabNavigator