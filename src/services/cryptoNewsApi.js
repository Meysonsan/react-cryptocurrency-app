import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeaders = {
    'X-RapidAPI-Key': 'e691cc0bc4mshbc8c0e54534fd53p1a0f75jsn07f661056764',
	'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
}

const baseUrl = 'https://real-time-finance-data.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/market-trends?trend_type=${newsCategory}&country=us&language`),
            // transformResponse: (response) => (response.data)
        })
    })
});

export const {
    useGetCryptoNewsQuery,
} = cryptoNewsApi;