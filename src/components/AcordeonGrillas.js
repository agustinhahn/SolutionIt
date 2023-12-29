import { View, Text, TouchableOpacity, StyleSheet, Button, Pressable } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { useState } from 'react';

const Acordeon = ({ trabajo,navigation,route }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleCollapse} style={styles.header}>
                <Text style={styles.title}>{trabajo.trabajo}</Text>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed}>
                <View>
                    <Pressable onPress={()=>
                        navigation.navigate("FinalizarGrilla")
                    }>
                        <Text>TERMINADO</Text>
                    </Pressable>
                    <Pressable>
                        <Text>SUSPENDIDO</Text>
                    </Pressable>
                </View>
                <View style={styles.content}>
                    <Text style={styles.infoText}>Numero de cliente: {trabajo.numero_cliente}</Text>
                    <Text style={styles.infoText}>Titular: {trabajo.titular}</Text>
                    <Text style={styles.infoText}>Direccion: {trabajo.direccion}</Text>
                    <Text style={styles.infoText}>Telefono: {trabajo.telefono}</Text>
                    <Text style={styles.infoText}>Cobrar: {trabajo.costo}</Text>
                    <Text style={styles.infoText}>Direccion IP/Precinto: {trabajo.direccion_ip_precinto}</Text>
                    <Text style={styles.infoText}>Accesspoint/Caja: {trabajo.accesspoint_caja}</Text>
                    <Text style={styles.infoText}>Info adicional: {trabajo.info_adicional}</Text>
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
        width: '100%',
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
    infoText: {
        marginBottom: 8,
        fontSize: 16,
    },
});
