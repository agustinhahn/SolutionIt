import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { useState } from 'react';
import { colors } from "../global/colors"

const Acordeon = ({ valores, tituloAc }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleCollapse} style={styles.header}>
                <Text style={styles.title}>{tituloAc}</Text>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed}>
                <View style={styles.content}>
                    <FlatList
                        data={valores}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.ingredient}>
                                <Text style={styles.lista}>- {item.titulo}</Text>
                                <Text>${item.precio}</Text>
                            </View>
                        )}
                    />
                </View>
            </Collapsible>
        </View>
    );
};

export default Acordeon;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.gray2,
        marginVertical: 8,
        elevation: 2,
        width: "90%",
        marginTop: 30
    },
    header: {
        padding: 16,
        backgroundColor: colors.buttonInfo,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5, 
        // Para Android
        elevation: 10,
        // Para iOS
        shadowColor: colors.sombraButtonInfo,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    content: {
        padding: 16,
    },
    ingredient: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
    lista: {
        fontWeight: 'bold',
    },
});
