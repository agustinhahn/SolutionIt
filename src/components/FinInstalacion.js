import { View, Text, Pressable, StyleSheet, FlatList } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { equipoUsado } from '../features/itSlice'
import { estadoTarea } from "../features/itSlice"
import { useSelector } from 'react-redux'
import { colors } from "../global/colors"
import CheckBoxIt from "./CheckBoxIt"


const FinInstalacion = ({ navigation, route }) => {
    const stockEquipos = useSelector(state => state.it.value.products)

    const dispatch = useDispatch()
    const { idTarea } = route.params //traigo el id de la tarea a finalizar
    const [open, setOpen] = useState(false);
    const [valuePicker, setvaluePicker] = useState(null);
    const [equipo, setEquipo] = useState([]);
    const [opcionesPago, setOpcionesPago] = useState([])
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        const nuevosEquipos = stockEquipos.map(element => ({
            label: element.titulo,
            id: element.id
        }));
        setEquipo(nuevosEquipos);
        const opciones = [
            {
                value: 0,
                label: "Ya esta pagado"
            },
            {
                value: 1,
                label: "Paga luego"
            },
            {
                value: 2,
                label: "Paga total efectivo"
            },
            {
                value: 3,
                label: "Paga total tarjeta"
            },
            {
                value: 4,
                label: "Paga total transferencia"
            },
            {
                value: 5,
                label: "Paga con varios medios"
            },
        ]
        setOpcionesPago(opciones)
    }, [stockEquipos]);

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>COMPLETAR FORMULARIO</Text>
            <DropDownPicker
                open={open}
                value={valuePicker}
                items={opcionesPago}
                setOpen={setOpen}
                setValue={setvaluePicker}
                setItems={() =>{}}
                containerStyle={styles.dropdownContainer}
                style={styles.dropdownStyle}
                labelStyle={styles.dropdownLabel}
                selectedItemContainerStyle={styles.selectedItemContainer}
                placeholder="DEFINIR PAGO"
            />
            <Text style={styles.subheading}>EQUIPO UTILIZADO</Text>
            <FlatList
                data={stockEquipos}
                keyExtractor={item => (item && item.id) ? item.id.toString() : ''}
                renderItem={({ item }) => (
                    <View style={styles.centeredContainer}>
                        <CheckBoxIt
                            label={item.titulo}
                            onChange={(checked) => {
                                const newSelectedItems = checked
                                    ? [...selectedItems, item.id]
                                    : selectedItems.filter(id => id !== item.id);
                                setSelectedItems(newSelectedItems);
                            }}
                        />
                    </View>
                )}
            />
            <Pressable onPress={() => {
                dispatch(equipoUsado({ id: selectedItems }))
                dispatch(estadoTarea({ idTarea: idTarea }))
                navigation.navigate('TareaFinalizada')
            }
            }
                style={styles.confirmButton}>
                <Text style={styles.confirmButtonText}>CONFIRMAR</Text>
            </Pressable>
            <Pressable style={styles.cancelButton}
                onPress={() => {
                    navigation.navigate('Grillas')
                }}
            >
                <Text style={styles.confirmButtonText}>CANCELAR</Text>
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
        backgroundColor: colors.backGroundBase
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    subheading: {
        fontSize: 18,
        marginBottom: 12,
    },
    dropdownContainer: {
        width: '100%',
        marginTop: 8,
    },
    dropdownStyle: {
        backgroundColor: '#fafafa',
        marginTop: 10,
        marginBottom: 30
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
        backgroundColor: colors.confirmButton,
        borderRadius: 8,
    },
    cancelButton: {
        marginTop: 16,
        padding: 12,
        backgroundColor: colors.cancelButton,
        borderRadius: 8,
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    centeredContainer: {
        paddingHorizontal: 50,
        marginTop: 10,
        width: "100%",
    },
});