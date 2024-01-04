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
        }
    }
})

export const {equipoUsado} = itSlice.actions

export default itSlice.reducer