import { View, Text, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from "@expo/vector-icons"
import Home from '../screens/Home'
import Grillas from '../screens/Grillas'
import Info from '../screens/Info'
import Stock from '../screens/Stock'
import TabIcon from '../components/TabIcon';
import StockStack from './StockStack';
import InfoStack from './InfoStack';
import GrillasStack from './GrillasStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: styles.tabBar
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
                    component={GrillasStack}
                    options={{
                        tabBarIcon: ({ focused }) => <TabIcon icon="clipboard" label="work" focused={focused} />
                    }}
                />
                <Tab.Screen
                    name='Info'
                    component={InfoStack}
                    options={{
                        tabBarIcon: ({ focused }) => <TabIcon icon="info" label="info" focused={focused} />
                    }}
                />
                <Tab.Screen
                    name='Stock'
                    component={StockStack}
                    options={{
                        tabBarIcon: ({ focused }) => <TabIcon icon="box" label="stock" focused={focused} />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default TabNavigator


const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "grey",
        elevation: 4,
        position: "absolute",
        bottom: 25,
        left: 20,
        right: 20,
        borderRadius: 15,
        height: 90


    }
})