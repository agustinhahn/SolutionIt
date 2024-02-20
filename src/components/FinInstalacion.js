import { View, Text, Pressable, StyleSheet, FlatList, TextInput, TouchableWithoutFeedback, KeyboardAvoidingView, Keyboard, ScrollView } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { equipoUsado } from '../features/itSlice'
import { estadoTarea } from "../features/itSlice"
import { datosTareaFinalizada } from "../features/itSlice"
import { useSelector } from 'react-redux'
import { colors } from "../global/colors"
import CheckBoxIt from "./CheckBoxIt"
import Loader from './Loader';


const FinInstalacion = ({ navigation, route }) => {
    const stockEquipos = useSelector(state => state.it.value.products)
    const mediosPago = useSelector(state => state.it.value.mediosdepago)

    const dispatch = useDispatch()

    const { idTarea } = route.params //traigo el id de la tarea a finalizar
    const [open, setOpen] = useState(false);
    const [valuePicker, setvaluePicker] = useState(null);
    const [equipo, setEquipo] = useState([]);
    const [opcionesPago, setOpcionesPago] = useState([])
    const [selectedItems, setSelectedItems] = useState([]);
    const [number, onChangeNumber] = useState(0)
    const [comment, setComment] = useState("")
    const [useComment, setUseComment] = useState(false)
    const [addCommentTextButton, setAddCommentTextButton] = useState("Agregar comentario")

    useEffect(() => {
        const nuevosEquipos = stockEquipos.map(element => ({
            label: element.titulo,
            id: element.id
        }));
        setEquipo(nuevosEquipos);
        if (mediosPago) {
            setOpcionesPago(mediosPago)
        }
    }, [stockEquipos]);

    const handleComment = () => {
        if (!useComment) {
            setAddCommentTextButton("Eliminar comentario")
            setUseComment(true)
        }
        else {
            setAddCommentTextButton("Agregar comentario")
            setUseComment(false)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
                <View style={styles.container}>
                    <Text style={styles.heading}>COMPLETAR FORMULARIO</Text>
                    {
                        mediosPago ? <DropDownPicker
                            open={open}
                            value={valuePicker}
                            items={opcionesPago}
                            setOpen={setOpen}
                            setValue={setvaluePicker}
                            setItems={() => { }}
                            containerStyle={styles.dropdownContainer}
                            style={styles.dropdownStyle}
                            labelStyle={styles.dropdownLabel}
                            selectedItemContainerStyle={styles.selectedItemContainer}
                            placeholder="DEFINIR PAGO"
                        /> : <Loader />
                    }
                    {
                        valuePicker == 2 || valuePicker == 3 || valuePicker == 4 ? <View><TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="escriba importe"
                            keyboardType="numeric"
                        /></View> : null
                    }
                    <Text style={styles.subheading}>EQUIPOS UTILIZADOS</Text>
                    <FlatList
                        style={{ flex: 1, width: '100%' }}
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
                    <Pressable style={styles.commentButton} onPress={() => handleComment()}>
                        <Text style={styles.confirmButtonText}>
                            {addCommentTextButton}
                        </Text>
                    </Pressable>
                    {
                        useComment ? <View><TextInput
                            style={styles.input}
                            onChangeText={setComment}
                            value={comment}
                            placeholder="detalle/comentario"
                            keyboardType="default" /></View> : null
                    }
                    <Pressable onPress={() => {
                        dispatch(equipoUsado({ id: selectedItems }))
                        dispatch(estadoTarea({ idTarea: idTarea }))
                        dispatch(datosTareaFinalizada({ idEquipos: selectedItems, idTareaFin: idTarea, valuePago: valuePicker, importe: number, descripction: comment }))
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
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}


export default FinInstalacion

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backGroundBase,
        marginBottom: 50,
        flexGrow: 1
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
        marginBottom: 10
    },
    dropdownLabel: {
        fontSize: 16,
        color: '#333',
    },
    selectedItemContainer: {
        backgroundColor: '#e0e0e0',
    },
    confirmButton: {
        marginTop: 10,
        padding: 6,
        backgroundColor: colors.confirmButton,
        borderRadius: 8,
    },
    cancelButton: {
        marginTop: 10,
        padding: 6,
        backgroundColor: colors.cancelButton,
        borderRadius: 8,
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
    },
    commentButton: {
        marginTop: 25,
        padding: 8,
        backgroundColor: colors.gray5,
        borderRadius: 8,
    },
    centeredContainer: {
        paddingHorizontal: 50,
        marginTop: 10,
        width: "100%",
    },
    input: {
        height: 40,
        borderWidth: 0.5,
        padding: 10,
        marginTop: 15,
        marginBottom: 10
    },
});