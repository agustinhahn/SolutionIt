import { configureStore } from '@reduxjs/toolkit'
import itReducer from '../features/itSlice'

export const store = configureStore({
    reducer:{
        it: itReducer
    },
})