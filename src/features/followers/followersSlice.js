import { createSlice } from '@reduxjs/toolkit';

export const followersSlice = createSlice({
  name: 'followers',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = followersSlice.actions;

export const selectFollowers = (state) => state.followers.value;

export default followersSlice.reducer;
