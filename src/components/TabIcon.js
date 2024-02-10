import { View, Text } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import {colors} from "../global/colors"

const TabIcon = ({icon, label, focused}) => {
    return (
        <View>
            <Entypo name={icon} size={40} color={focused ? colors.lightBlue9 : "#EEE"} />
            <Text>{label}</Text>
        </View>
    )
}

export default TabIcon