import { createSlice } from '@reduxjs/toolkit';

export const followersSlice = createSlice({
  name: 'followers',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementFollowers: (state) => {
      state.value += 1;
    },
    decrementFollowers: (state) => {
      state.value -= 1;
    },
  },
});

export const { incrementFollowers, decrementFollowers } = followersSlice.actions;

export const selectFollowers = (state) => state.followers.value;

export default followersSlice.reducer;
