import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from "../../firebase/db"

export const itApi = createApi({
    reducerPath: "itApi",
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    tagTypes:["image", "Tasks", "ActStock"],
    endpoints: (builder) => ({
        getInfoAbonoAntena: builder.query({
            query: () => `infoAbonoAntena.json`,
            transformResponse: (response) => Object.values(response)
        }),
        getInfoAbonoFibra: builder.query({
            query: () => `infoAbonoFibra.json`,
            transformResponse: (response) => Object.values(response)
        }),
        getInfoInsta: builder.query({
            query: () => `infoInsta.json`,
            transformResponse: (response) => Object.values(response)
        }),
        getInfoPrecios: builder.query({
            query: () => "infoPrecios.json",
            transformResponse: (response) => Object.values(response)
        }),
        getStock: builder.query({
            query: () => `stock.json`,
            transformResponse: (response) => Object.values(response),
            providesTags:["ActStock"]
        }),
        getTrabajos: builder.query({
            query: () => `trabajos.json`,
            transformResponse: (response) => Object.values(response),
            providesTags:["Tasks"]
        }),
        getTareasFinalizadas: builder.query({
            query: () => `trabajosFinalizados.json`,
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
        postActualizarTareasPendientes: builder.mutation({
            query:({obj}) => ({
                url: `trabajos.json`,
                method: "PUT",
                body: obj
            }),
            invalidatesTags: ["Tasks"]
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

export const { useGetInfoAbonoAntenaQuery, usePostActualizarTareasPendientesMutation ,useGetProfileImageQuery,usePostProfileImageMutation, usePostTareaFinalizadaMutation , usePostStockMutation , useGetInfoAbonoFibraQuery, useGetInfoInstaQuery, useGetInfoPreciosQuery, useGetStockQuery, useGetTrabajosQuery, useGetTareasFinalizadasQuery } = itApi