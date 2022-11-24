import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
const UserProfileNavButton = () => {
  return (
    <Link to="/profile" className="p-2 px-3 border border-emerald-700 text-emerald-700 bg-neutral-800 hover:bg-neutral-900 rounded-md">
      <FontAwesomeIcon icon={faCog} />
    </Link>
  );
};

export default UserProfileNavButton;
