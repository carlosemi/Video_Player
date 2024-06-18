import { configureStore } from '@reduxjs/toolkit';
import {apiSlice} from './slices/apiSlice';
import { videosApiSlice } from './slices/videosApiSlice';

const store = configureStore({
  reducer: { 
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiSlice.middleware, videosApiSlice.middleware),
});

export default store;