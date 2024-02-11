import { View, Text } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons';
import {colors} from "../global/colors"

const TabIcon = ({icon, label, focused}) => {
    return (
        <View>
            <FontAwesome5 name={icon} size={30} color={focused ? colors.lightBlue9 : "#EEE"} />
            <Text>{label}</Text>
        </View>
    )
}

export default TabIcon