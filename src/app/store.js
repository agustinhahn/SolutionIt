import { configureStore } from '@reduxjs/toolkit'
import itReducer from '../features/itSlice'
import { itApi } from './services/itServices'
import { setupListeners } from '@reduxjs/toolkit/query'
import { authApi } from './services/auth'
import authReducer from "../features/auth/authSlice"

export const store = configureStore({
    reducer:{
        it: itReducer,
        auth: authReducer,
        [itApi.reducerPath] : itApi.reducer,
        [authApi.reducerPath] : authApi.reducer,
    },
    middleware: (getDefaultMiddleware) => // por ahora no utilizo 
    getDefaultMiddleware().concat(itApi.middleware,authApi.middleware)
})

setupListeners(store.dispatch)