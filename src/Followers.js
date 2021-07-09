import React from 'react';
import { useSelector } from 'react-redux';
import { selectFollowers } from './features/followers/followersSlice';
import Avatar from './Avatar';

export function Followers() {
  const followers = useSelector(selectFollowers);

  return (
    <div className="flex justify-center">
      <div className="border-4 border-b-0 border-white bottom-0 bg-purple fixed flex items-center mx-auto p-4 text-white rounded-lg rounded-b-none">
        <Avatar />
        {`${followers} followers`}
      </div>
    </div>
  );
}
