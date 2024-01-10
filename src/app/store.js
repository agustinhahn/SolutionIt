import { configureStore } from '@reduxjs/toolkit'
import itReducer from '../features/itSlice'
import { itApi } from './services/itServices'
import { setupListeners } from '@reduxjs/toolkit/query'


export const store = configureStore({
    reducer:{
        it: itReducer,
        [itApi.reducerPath] : itApi.reducer,
    },
    middleware: (getDefaultMiddleware) => // por ahora no utilizo 
    getDefaultMiddleware().concat(itApi.middleware)
})

setupListeners(store.dispatch)