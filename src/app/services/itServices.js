import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from "../../firebase/db"

export const itApi = createApi({
    reducerPath: "itApi",
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
    tagTypes:["image", "Tasks"],
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
            transformResponse: (response) => Object.values(response)
        }),
        getTrabajos: builder.query({
            query: () => `trabajos.json`,
            transformResponse: (response) => Object.values(response),
            providesTags:["Tasks"]
        }),
        postStock: builder.mutation({
            query: ({id, cantidad, titulo}) => ({
                url: `stock/${id}.json`,
                method: "PUT",
                body: {
                    id: id,
                    cantidad: cantidad,
                    titulo: titulo
                }
            })
        }),
        postTareaFinalizada: builder.mutation({
            query: ({id, costo, direccion, info_adicional, telefono, titular, trabajo}) => ({
                url: `trabajosFinalizados.json`,
                method: "POST",
                body: {
                    id: id,
                    costo: costo,
                    direccion: direccion,
                    info_adicional : info_adicional,
                    telefono: telefono,
                    titular: titular,
                    trabajo: trabajo
                }
            }),
            invalidatesTags: ["Tasks"]
        }),
        deleteTarea: builder.mutation({
            query: ({id}) => ({
                url: `trabajos/${id}.json`,
                method: "DELETE",
            }),
            invalidatesTags: ["Tasks"]
        }),
        postActualizarTareasPendientes: builder.mutation({
            query:({obj}) => ({
                url: `trabajos.json`,
                method: "PUT",
                body: obj
            })
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

export const { useGetInfoAbonoAntenaQuery, usePostActualizarTareasPendientesMutation ,useDeleteTareaMutation ,useGetProfileImageQuery,usePostProfileImageMutation, usePostTareaFinalizadaMutation , usePostStockMutation , useGetInfoAbonoFibraQuery, useGetInfoInstaQuery, useGetInfoPreciosQuery, useGetStockQuery, useGetTrabajosQuery } = itApi