import { View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home'
import TabIcon from '../components/TabIcon';
import StockStack from './StockStack';
import InfoStack from './InfoStack';
import GrillasStack from './GrillasStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}
        >
            <Tab.Screen
                name='GrillasTab'
                component={GrillasStack}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon icon="clipboard" label="work" focused={focused} />
                }}
            />
            <Tab.Screen
                name='InfoTab'
                component={InfoStack}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon icon="info" label="info" focused={focused} />
                }}
            />
            <Tab.Screen
                name='StockTab'
                component={StockStack}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon icon="box" label="stock" focused={focused} />
                }}
            />
            <Tab.Screen
                name='ProfileStack'
                component={ProfileStack}
                options={{
                    tabBarIcon: ({ focused }) => <TabIcon icon="user" label="Perfil" focused={focused} />
                }}
            />
        </Tab.Navigator>
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
        height: 90,
        zIndex: 0


    }
})