import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Avatar() {
  return (
    <div className="border border-avatar bg-avatar rounded-full p-1 h-8 w-8 mr-4 text-center text-white">
      <FontAwesomeIcon icon={faUser} />
    </div>
  );
}

export default Avatar;
