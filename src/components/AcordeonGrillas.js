import { View, Text, TouchableOpacity, StyleSheet, Button, Pressable } from 'react-native';
import Collapsible from 'react-native-collapsible';
import { useEffect, useState } from 'react';
import { estadoTarea } from "../features/itSlice"
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Loader from './Loader';
import { colors } from "../global/colors"

const Acordeon = ({ trabajo, navigation, route, arrayUsado }) => {

    const dispatch = useDispatch()
    const trabajosPendientes = useSelector(state => state.it.value.tareasPendientes)
    const trabajosFinalizados = useSelector(state => state.it.value.tareasFinalizadas)
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };
    if (!trabajo) return <Loader />
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleCollapse} style={styles.header}>
                <Text style={styles.title}>{trabajo.trabajo}</Text>
            </TouchableOpacity>
            <Collapsible collapsed={isCollapsed}>
                {
                    arrayUsado == trabajosPendientes ? (
                        <View style={styles.actionsContainer}>
                            <Pressable
                                style={styles.terminadoButton}
                                onPress={() => navigation.navigate('FinInstalacion', { idTarea: trabajo.id })}
                            >
                                <Text style={styles.actionButtonText}>TERMINADO</Text>
                            </Pressable>
                            <Pressable
                                style={styles.suspendidoButton}
                                onPress={() => {
                                    dispatch(estadoTarea({ idTarea: trabajo.id }))
                                    navigation.navigate('TareaFinalizada')
                                }}
                            >
                                <Text style={styles.actionButtonText}>SUSPENDIDO</Text>
                            </Pressable>
                        </View>)
                        :
                        null
                }
                <View style={styles.content}>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoTitle}>Número de cliente: </Text>
                        <Text style={styles.infoText}>{trabajo.numero_cliente}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoTitle}>Titular: </Text>
                        <Text style={styles.infoText}>{trabajo.titular}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoTitle}>Dirección: </Text>
                        <Text style={styles.infoText}>{trabajo.direccion}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoTitle}>Teléfono: </Text>
                        <Text style={styles.infoText}>{trabajo.telefono}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoTitle}>Cobrar: </Text>
                        <Text style={styles.infoText}>{trabajo.costo}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoTitle}>Dirección IP/Precinto: </Text>
                        <Text style={styles.infoText}>{trabajo.direccion_ip_precinto}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoTitle}>Accesspoint/Caja: </Text>
                        <Text style={styles.infoText}>{trabajo.accesspoint_caja}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <Text style={styles.infoTitle}>Info adicional: </Text>
                        <Text style={styles.infoText}>{trabajo.info_adicional}</Text>
                    </View>
                </View>

            </Collapsible>
        </View>
    );
};

export default Acordeon;

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
        width: '90%',
        zIndex: 1,
    },
    header: {
        padding: 16,
        backgroundColor: colors.lightBlue8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5, 
        // Para Android
        elevation: 10,
        // Para iOS
        shadowColor: colors.lightBlue6,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    title: {
        color: colors.blue1,
        fontSize: 18,
        fontWeight: 'bold',
    },
    actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 8,
        backgroundColor: colors.gray2
    },
    suspendidoButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        marginHorizontal: 8,
        alignItems: 'center',
        backgroundColor: "#d19200",
    },
    terminadoButton: {
        flex: 1,
        padding: 12,
        borderRadius: 8,
        marginHorizontal: 8,
        alignItems: 'center',
        backgroundColor: colors.confirmButton,
    },
    actionButtonText: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold',
    },
    content: {
        padding: 16,
        backgroundColor: colors.gray2,
    },
    infoText: {
        marginBottom: 8,
        fontSize: 16,
    },
    infoTitle: {
        marginBottom: 4,
        fontSize: 16,
        fontWeight: 'bold',
    },
    infoRow: {
        flexDirection: 'row',
        marginBottom: 6,
    }
});
