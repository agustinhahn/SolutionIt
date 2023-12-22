import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { useState } from 'react';

const Acordeon = ({valores, tituloAc}) => {
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
                        keyExtractor={(item, index) => index.toString()}
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
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        marginVertical: 8,
        overflow: 'hidden',
        elevation: 2,
    },
    header: {
        padding: 16,
        backgroundColor: '#3498DB',
        justifyContent: 'center',
        alignItems: 'center',
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
