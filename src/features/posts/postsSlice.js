import { createSlice } from '@reduxjs/toolkit';
import { generatePost } from "../../app/gameFunctions";

const initialState = [
  generatePost("I0"), // first instruction post
  generatePost() // randomly generated post
];

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.push(action.payload);
    },
    removePost: (state, action) => {
      const index = state.findIndex(post => post.id === action.payload);
      if (index > -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addPost, removePost } = postsSlice.actions;

export const selectPosts = (state) => state.posts;

export default postsSlice.reducer;
