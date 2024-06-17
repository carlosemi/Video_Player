import {apiSlice} from './apiSlice'
import { VIDEOS_URL, VIDEO_URL} from '../constants'

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
                url: `${VIDEOS_URL}/?user_id=Carlos%20Guerra`,
            }),
        }),
        editVideo: builder.mutation ({
            query: ({orderId, details}) => ({
                url: `${VIDEOS_URL}/`,
                method: 'PUT',
                body: details
            })
        }),
        getVideo: builder.query({
            query: (id) => ({
                url: `${VIDEO_URL}/?${id}`
            })
        })
    }),
})

export const {
    useCreateVideoMutation,
    useGetVideosQuery,
    useEditVideoMutation,
    useGetVideoQuery
} = videosApiSlice;