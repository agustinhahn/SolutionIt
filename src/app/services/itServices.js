import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {base_url} from "../../firebase/db"

export const itApi = createApi({
    reducerPath: "itApi",
    baseQuery: fetchBaseQuery({baseUrl: base_url}),
    endpoints: (builder) =>({
        getInfoAbonoAntena: builder.query({
            query:() => `infoAbonoAntena.json`
        }),
        getInfoAbonoFibra: builder.query({
            query:() => `infoAbonoFibra.json`
        }),
        getInfoInsta: builder.query({
            query: () => `infoInsta.json`
        }),
        getInfoPrecios: builder.query({
            query: () => "infoPrecios.json"
        }),
        getStock: builder.query({
            query: () => `stock.json`
        }),
        getTrabajos: builder.query({
            query: () => `trabajos.json`
        })
    })
})

export const {useGetInfoAbonoAntenaQuery, useGetInfoAbonoFibraQuery, useGetInfoInstaQuery, useGetInfoPreciosQuery, useGetStockQuery, useGetTrabajosQuery} = itApi