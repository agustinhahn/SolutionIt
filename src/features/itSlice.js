import { createSlice } from '@reduxjs/toolkit'
import { array } from 'yup'

const initialState = {
    value: {
        products: [],
        tareasPendientes: [],
        tareasFinalizadas: [],
        nuevaTareaFinalizada : [],
        nuevaTareaSuspendida: [],
        tareasSuspendidas: [],
        mediosdepago: [],
        datosTareaFinalizada: {
            equipoUsado: [],
            idTarea: [],
            pago: {
                medio: [],
                importe: []
            },
            comentarios: []
        },
        datosArrayTareasFinalizadas: []
    }
}

export const itSlice = createSlice({

    name: "it",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.value.products = action.payload
        },
        setMediosPago: (state, action) => {
            const nuevosMediosPago = action.payload.map(({ value, label }) => ({ value, label }));
            state.value.mediosdepago = nuevosMediosPago;
        },
        setTareasPendientes: (state, action) => {
            state.value.tareasPendientes = action.payload
        },
        setTareasFinalizadas: (state, action) => {
            state.value.tareasFinalizadas = action.payload
        },
        equipoUsado: (state, action) => {
            const { id } = action.payload;
            if(id.length>0) {
                let arrayModificado = state.value.products;
                id.forEach(element => {
                    const nuevoArrayModificado = arrayModificado.map((p) => {
                        if (p.id === element) {
                            return { ...p, cantidad: p.cantidad - 1 };
                        }
                        return p;
                    }
                    );
                    arrayModificado = nuevoArrayModificado
                });
                state.value.products = arrayModificado;
            }
        },
        estadoTarea: (state, action) => {
            const { idTarea } = action.payload;
            const tareaIndex = state.value.tareasPendientes.findIndex((p) => p.id == idTarea);
            if (tareaIndex !== -1) {
                const tarea = state.value.tareasPendientes.splice(tareaIndex, 1)[0]
                state.value.nuevaTareaFinalizada = tarea
                state.value.tareasFinalizadas.push(tarea)
            }
        },
        nuevaTareaSuspendida: (state,action) =>{
            const { idTarea } = action.payload;
            const tareaIndex = state.value.tareasPendientes.findIndex((p) => p.id == idTarea);
            if (tareaIndex !== -1) {
                const tarea = state.value.tareasPendientes.splice(tareaIndex, 1)[0]
                state.value.nuevaTareaSuspendida = tarea
                state.value.tareasSuspendidas.push(tarea)
            }
        },
        limpiarTareaFinalizada: (state,action) => {
            state.value.nuevaTareaFinalizada = []
        },
        limpiarTareaSuspendida: (state,action) => {
            state.value.nuevaTareaSuspendida = []
        },
        datosTareaFinalizada: (state,action) => {
            const {idEquipos} = action.payload
            const {idTareaFin} = action.payload
            const {valuePago} = action.payload
            const {importe} = action.payload
            const {descripction} = action.payload
            if(idEquipos.length>0){
                let objetoEncontrado
                idEquipos.forEach(element => {
                    objetoEncontrado = state.value.products.find(obj => obj.id === element)
                    state.value.datosTareaFinalizada.equipoUsado.push(objetoEncontrado.titulo)
                });
            }
            let LabelPago = state.value.mediosdepago.find(obj => obj.value === valuePago)
            state.value.datosTareaFinalizada.pago.medio.push(LabelPago.label)
            state.value.datosTareaFinalizada.idTarea.push(idTareaFin)
            state.value.datosTareaFinalizada.pago.importe.push(importe)
            state.value.datosTareaFinalizada.comentarios.push(descripction)
            const nuevaInfoFinalizada = state.value.datosTareaFinalizada
            state.value.datosArrayTareasFinalizadas.push(nuevaInfoFinalizada)
        },
        limpiarDatosTareafinalizada: (state,action) => {
            state.value.datosTareaFinalizada = {
                equipoUsado: [],
                idTarea: [],
                pago: {
                    medio: [],
                    importe: []
                },
                comentarios: []
            }
        }
    }
})

export const { equipoUsado, estadoTarea, setProducts,datosTareaFinalizada, limpiarDatosTareafinalizada,datosArrayTareasFinalizadas,setMediosPago, nuevaTareaSuspendida, setTareasPendientes, setTareasFinalizadas, limpiarTareaFinalizada, limpiarTareaSuspendida} = itSlice.actions

export default itSlice.reducer