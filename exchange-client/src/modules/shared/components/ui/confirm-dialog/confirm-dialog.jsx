import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCancel, faWarning } from '@fortawesome/free-solid-svg-icons';
const ConfirmDialog = ({ onConfirm, onCancel, display = false }) => {
  if (!display) return;

  return (
    <div className="z-50 fixed top-0 left-0 w-full  h-full bg-neutral-900/70 flex flex-row ">
      <div className=" mx-auto my-auto border border-emerald-700 p-2 rounded-md bg-neutral-900 ">
        <p className="text-4xl font-semibold text-neutral-300">
          <FontAwesomeIcon className="mr-2 text-pink-700 text-4xl" icon={faWarning} />
          Please confirm your action!
        </p>
        <div className="flex flex-row justify-center gap-2 mt-4">
          <button onClick={onConfirm} className="p-2 border border-emerald-700 bg-neutral-800 hover:bg-neutral-900 rounded-md text-emerald-700">
            Proceed <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <button onClick={onCancel} className="p-2 border border-pink-700 bg-neutral-800 hover:bg-neutral-900 rounded-md text-pink-700">
            Cancel <FontAwesomeIcon icon={faCancel} />
          </button>{' '}
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
