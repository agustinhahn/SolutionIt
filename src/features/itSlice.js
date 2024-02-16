import { createSlice } from '@reduxjs/toolkit'
import { array } from 'yup'

const initialState = {
    value: {
        products: [],
        tareasPendientes: [],
        tareasFinalizadas: [],
        nuevaTareaFinalizada : [],
        nuevaTareaSuspendida: [],
        tareasSuspendidas: []
    }
}

export const itSlice = createSlice({

    name: "it",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.value.products = action.payload
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
        }
    }
})

export const { equipoUsado, estadoTarea, setProducts, nuevaTareaSuspendida, setTareasPendientes, setTareasFinalizadas, limpiarTareaFinalizada, limpiarTareaSuspendida} = itSlice.actions

export default itSlice.reducer