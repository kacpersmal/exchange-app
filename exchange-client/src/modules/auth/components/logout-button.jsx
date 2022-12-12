import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from '../../shared';
const LogoutButton = () => {
  const { logout } = useAuth0();
  const dispatch = useDispatch();

  const onLogout = (event) => {
    dispatch(showLoader());
    logout();
    dispatch(hideLoader());
  };

  return (
    <button className="rounded-md border border-pink-700 text-pink-700  p-2 px-3 bg-neutral-800 hover:bg-neutral-900" onClick={onLogout}>
      <FontAwesomeIcon icon={faPowerOff} />
    </button>
  );
};

export default LogoutButton;
