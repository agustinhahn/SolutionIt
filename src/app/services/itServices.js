import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from "../../firebase/db"

export const itApi = createApi({
    reducerPath: "itApi",
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    tagTypes:["image", "Tasks", "ActStock"],
    endpoints: (builder) => ({
        getInfoGeneral: builder.query({
            query: () => "infoPreciosGenerales.json",
            transformResponse: (response) => Object.values(response)
        }),
        getStock: builder.query({
            query: () => `stock.json`,
            transformResponse: (response) => Object.values(response),
            providesTags:["ActStock"]
        }),
        getTrabajos: builder.query({
            query: () => `trabajos.json`,
            transformResponse: (response) => {
                if (response === null) {
                    return null; // Retornar null si la respuesta es null
                } else {
                    return Object.values(response); // Transformar la respuesta a un objeto si no es null
                }
            },
            providesTags:["Tasks"]
        }),
        getTareasFinalizadas: builder.query({
            query: () => `trabajosFinalizados.json`,
            transformResponse: (response) => {
                if (response === null) {
                    return null; // Retornar null si la respuesta es null
                } else {
                    return Object.values(response); // Transformar la respuesta a un objeto si no es null
                }
            },
        }),
        getMediosDePago: builder.query({
            query: () => `mediosdepago.json`,
            transformResponse: (response) => Object.values(response),
        }),
        postStock: builder.mutation({
            query: ({obj}) => ({
                url: `stock.json`,
                method: "PUT",
                body: obj
            }),
            invalidatesTags: ["ActStock"]
        }),
        postTareaFinalizada: builder.mutation({
            query: ({obj}) => ({
                url: `trabajosFinalizados.json`,
                method: "POST",
                body: obj
            }),
            invalidatesTags: ["Tasks"]
        }),
        postTareaSuspendida: builder.mutation({
            query: ({obj}) => ({
                url: `trabajosSuspendidos.json`,
                method: "POST",
                body: obj
            }),
            invalidatesTags: ["Tasks"]
        }),
        postActualizarTareasPendientes: builder.mutation({
            query:({obj}) => ({
                url: `trabajos.json`,
                method: "PUT",
                body: obj
            }),
            invalidatesTags: ["Tasks"]
        }),
        postDatosFinTarea: builder.mutation({
            query: ({obj}) => ({
                url: `datosTrabajosFinalizados.json`,
                method: "PUT",
                body: obj
            }),
        }),
        postProfileImage: builder.mutation({
            query:({localId, image}) =>({
                url: `profileImage/${localId}.json`,
                method: "PUT",
                body: {image}
            }),
            invalidatesTags:["image"]
        }),
        getProfileImage: builder.query({
            query: (localId) => `profileImage/${localId}.json`,
            providesTags:["image"]
        })
    })
})

export const { useGetInfoGeneralQuery,  useGetMediosDePagoQuery, usePostTareaSuspendidaMutation, usePostDatosFinTareaMutation, usePostActualizarTareasPendientesMutation ,useGetProfileImageQuery,usePostProfileImageMutation, usePostTareaFinalizadaMutation , usePostStockMutation ,  useGetStockQuery, useGetTrabajosQuery, useGetTareasFinalizadasQuery } = itApi