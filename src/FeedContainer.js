import React from 'react';
import { useSelector } from 'react-redux'
import { selectPosts } from "./features/posts/postsSlice";
import Post from './Post';

export function FeedContainer() {
  const posts = useSelector(selectPosts);

  return (
    <div className="mb-20">
      {posts.map(post => <Post key={post.id} post={post} />)}
    </div>
  );
}
