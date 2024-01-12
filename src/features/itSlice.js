import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        products: [],
        tareasPendientes: [],
        tareasFinalizadas: []
    }
}

export const itSlice = createSlice({

    name: "it",
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.value.products = action.payload
            console.log(state.value.products)
        },
        equipoUsado: (state, action) => {
            const { id } = action.payload;
            const updateStock = state.value.products.map((p) => {
                if(p.id == id){
                    return{
                        ...p,
                        cantidad:p.cantidad -1
                    }
                }
                return p
            })
            state.value.products = updateStock
        },
        estadoTarea: (state, action) => {
            const { idTarea } = action.payload;
            const tareaIndex = state.value.tareasPendientes.findIndex((p) => p.id == idTarea);
            if (tareaIndex !== -1) {
                const tarea = state.value.tareasPendientes.splice(tareaIndex, 1)[0]
                state.value.tareasFinalizadas.push(tarea)
            }
        }
    }
})

export const { equipoUsado, estadoTarea, setProducts } = itSlice.actions

export default itSlice.reducer