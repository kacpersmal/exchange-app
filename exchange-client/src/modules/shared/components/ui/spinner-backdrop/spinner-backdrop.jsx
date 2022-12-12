import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
const SpinnerBackdrop = ({ active }) => {
  if (!active) return;

  return (
    <div className="z-50 rounded-md absolute w-full h-full bg-neutral-900/70 top-0 left-0 w flex">
      <FontAwesomeIcon icon={faSpinner} className="mx-auto my-auto animate-spin text-emerald-700 text-3xl" />
    </div>
  );
};

export default SpinnerBackdrop;
