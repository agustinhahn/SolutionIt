import { View, Text, Button, Pressable, StyleSheet } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { equipoUsado } from '../features/itSlice'
import {estadoTarea} from "../features/itSlice"

const FinInstalacion = ({navigation, route}) => {

    const dispatch = useDispatch()
    const {idTarea} = route.params //traigo el id de la tarea a finalizar

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [equipo, setEquipo] = useState([
        { label: 'NANO LOCO AC', value: '1' },
        { label: 'AIR GRID', value: '7' },
        { label: 'LITEBEAM AC', value: '3' },
    ]);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>COMPLETAR FORMULARIO</Text>
            <Text style={styles.subheading}>EQUIPO UTILIZADO</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={equipo}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setEquipo}
                containerStyle={styles.dropdownContainer}
                style={styles.dropdownStyle}
                labelStyle={styles.dropdownLabel}
                selectedItemContainerStyle={styles.selectedItemContainer}
                placeholder="Seleccionar equipo"
            />
            <Pressable onPress={() => {
                dispatch(equipoUsado({ id: value }))
                dispatch(estadoTarea({ idTarea: idTarea}))
                //necesito una funcion en dispatch que le pase el id de la tarea y que tome el array completo, se lo elimine y lo pase al otro de finalizado.
                navigation.navigate('TareaFinalizada')
            }
            }
                style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>CONFIRMAR</Text>
            </Pressable>
        </View>
    )
}

export default FinInstalacion

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    subheading: {
        fontSize: 18,
        marginBottom: 8,
    },
    dropdownContainer: {
        width: '100%',
        marginTop: 8,
    },
    dropdownStyle: {
        backgroundColor: '#fafafa',
    },
    dropdownLabel: {
        fontSize: 16,
        color: '#333',
    },
    selectedItemContainer: {
        backgroundColor: '#e0e0e0',
    },
    confirmButton: {
        marginTop: 16,
        padding: 12,
        backgroundColor: '#4CAF50',
        borderRadius: 8,
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
});