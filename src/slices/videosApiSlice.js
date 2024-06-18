import {apiSlice} from './apiSlice'
import { VIDEOS_URL, VIDEO_URL, COMMENT_URL, POST_COMMENT} from '../constants'

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
            query: (details) => ({
                url: `${VIDEOS_URL}`,
                method: 'PUT',
                body: details
            })
        }),
        getVideo: builder.query({
            query: (videoId) => ({
                url: `${VIDEOS_URL}/single?video_id=${videoId}`
            })
        }),
        getComments: builder.query({
            query: (videoId) => ({
                url: `${COMMENT_URL}?video_id=${videoId}`
            })
        }),
        createComment: builder.mutation({
            query: (details) => ({
                url: `${POST_COMMENT}`,
                method: 'POST',
                body: details
            })
        })
    }),
})

export const {
    useCreateVideoMutation,
    useGetVideosQuery,
    useEditVideoMutation,
    useGetVideoQuery,
    useGetCommentsQuery,
    useCreateCommentMutation
} = videosApiSlice;