import { View, Text, TouchableOpacity, StyleSheet, Button, Pressable } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { useState } from 'react';

const Acordeon = ({ trabajo, navigation, route , arrayUsado}) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    //tengo que traer un array de los usados aqui y comparar arrayUsado con el. si es true que haga una cosa y sino la otra
    //esto lo implemento para sacar los botones de las tareas cuando estan en finalizadas.
    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleCollapse} style={styles.header}>
                <Text style={styles.title}>{trabajo.trabajo}</Text>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed}>
                <View style={styles.actionsContainer}>
                    <Pressable
                        style={[styles.actionButton, styles.terminadoButton]}
                        onPress={() => navigation.navigate('FinInstalacion',{idTarea: trabajo.id})}
                    >
                        <Text style={styles.actionButtonText}>TERMINADO</Text>
                    </Pressable>
                    <Pressable style={styles.actionButton}>
                        <Text style={styles.actionButtonText}>SUSPENDIDO</Text>
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
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 8,
    },
    actionButton: {
        flex: 1,
        padding: 12,
        backgroundColor: '#3498DB',
        borderRadius: 8,
        marginHorizontal: 8,
        alignItems: 'center',
    },
    terminadoButton: {
        backgroundColor: '#4CAF50',
    },
    actionButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
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
