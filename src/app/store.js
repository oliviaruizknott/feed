import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import followersReducer from '../features/followers/followersSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    followers: followersReducer
  },
});
