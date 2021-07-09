import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import { generateText } from './app/gameFunctions';
import Reactions from './Reactions';

export function Post(props) {
  const post = props.post;
  const [text] = useState(generateText(post));

  const renderContent = () => {
    const font = post.instruction ? "font-sans" : "font-mockFlow";
    return (
      <div className={`${font} mb-4`}>{text}</div>
    )
  }

  return (
    <div className="border-4 border-purple bg-white rounded-lg m-4">
      <div className="p-4">
        <div className="flex justify-between">
          <div className="flex mb-4 items-center">
            <div className="border border-avatar bg-avatar rounded-full p-1 h-8 w-8 mr-4 text-center text-white">
              <FontAwesomeIcon icon={faUser} />
            </div>
            <div>Name</div>
          </div>
          <div>Timer</div>
        </div>
        {renderContent()}
      </div>
      <Reactions post={post} />
    </div>
  );
}

export default Post;
