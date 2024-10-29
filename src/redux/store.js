import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../components/posts/postsSlice';

const store = configureStore({
    reducer: {
        posts: postsReducer
    }
})

export default store

