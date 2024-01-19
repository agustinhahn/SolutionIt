import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        products: [],
        tareasPendientes: [],
        tareasFinalizadas: [],
        putEquipo : [],
        nuevaTareaFinalizada : []
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
        equipoUsado: (state, action) => {
            const { id } = action.payload;
            const arrayModificado = state.value.products.map((p) => {
                if(p.id === id){
                    return {...p, cantidad: p.cantidad -1}
                }
                return p
            });
            state.value.products = arrayModificado
            
            const buscarObjeto = (idObj) =>{
                const objEncontrado = arrayModificado.find(obj => obj.id === idObj)
                    if(objEncontrado){
                        return objEncontrado
                    }
            }
            state.value.putEquipo = buscarObjeto(id)
        },
        limpiarPutEquipo: (state, action) => {
            state.value.putEquipo = []
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
        limpiarTareaFinalizada: (state,action) => {
            state.value.nuevaTareaFinalizada = []
        }
    }
})

export const { equipoUsado, estadoTarea, setProducts, setTareasPendientes, limpiarPutEquipo, limpiarTareaFinalizada} = itSlice.actions

export default itSlice.reducer