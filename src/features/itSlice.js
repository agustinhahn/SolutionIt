import { createSlice } from '@reduxjs/toolkit'
import stock from '../data/stock.json'
import tareas from '../data/trabajos.json'

const initialState = {
    value: {
        products : stock,
        tareasPendientes : tareas,
        tareasFinalizadas : []
    }
}

export const itSlice = createSlice({
    name:"it",
    initialState,
    reducers:{
        equipoUsado : (state, action) =>{
            const {id} = action.payload;
            const articulo = state.value.products.find((p) => p.id == id)
            if(articulo){
                articulo.cantidad -=1
            }
        },
        estadoTarea : (state, action) =>{
            const {idTarea} = action.payload;
            const tareaIndex = state.value.tareasPendientes.findIndex((p) => p.id == idTarea);
            if(tareaIndex !== -1){
                const tarea = state.value.tareasPendientes.splice(tareaIndex, 1)[0]
                state.value.tareasFinalizadas.push(tarea)
            }
        }
    }
})

export const {equipoUsado, estadoTarea} = itSlice.actions

export default itSlice.reducer