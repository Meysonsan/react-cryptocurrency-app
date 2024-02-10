import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'e691cc0bc4mshbc8c0e54534fd53p1a0f75jsn07f661056764',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`coins?limit=${count}`),
            // transformResponse: (response) => (response.data)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=${timeperiod}`),
            transformResponse: (response) => (response.data)
        }),
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoApi;