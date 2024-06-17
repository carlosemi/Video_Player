import {apiSlice} from './apiSlice'
import { VIDEOS_URL} from '../constants'

export const videosApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createVideo: builder.mutation({
            query: (details) => ({
                url: VIDEOS_URL,
                method: 'POST',
                body: details,
            })
        }),
        getVideos: builder.query({
            query: (user_id) => ({
                url: `${VIDEOS_URL}/${user_id}`,
            }),
        }),
        editVideo: builder.mutation ({
            query: ({orderId, details}) => ({
                url: `${VIDEOS_URL}/${orderId}/pay`,
                method: 'PUT',
                body: details
            })
        }),
       
    }),
})