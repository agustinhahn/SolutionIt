import { View, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons';

const TabIcon = ({icon, label, focused}) => {
    return (
        <View>
            <Entypo name={icon} size={40} color={focused ? "white" : "#EEE"} />
            <Text>{label}</Text>
        </View>
    )
}

export default TabIcon