import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { base_url } from "../../firebase/db"

export const itApi = createApi({
    reducerPath: "itApi",
    baseQuery: fetchBaseQuery({ baseUrl: base_url }),
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
            query: () => `stocks.json`,
            transformResponse: (response) => Object.values(response)
        }),
        getTrabajos: builder.query({
            query: () => `trabajos.json`,
            transformResponse: (response) => Object.values(response)
        }),
        postStock: builder.mutation({
            query: ({id, cantidad, titulo}) => ({
                url: `stocks/${id}.json`,
                method: "PUT",
                body: {
                    id: id,
                    cantidad: cantidad,
                    titulo: titulo
                }
            })
        }),
    })
})

export const { useGetInfoAbonoAntenaQuery, usePostStockMutation , useGetInfoAbonoFibraQuery, useGetInfoInstaQuery, useGetInfoPreciosQuery, useGetStockQuery, useGetTrabajosQuery } = itApi