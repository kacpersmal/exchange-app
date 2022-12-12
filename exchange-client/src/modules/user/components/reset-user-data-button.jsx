import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { ConfirmDialog } from '../../shared/components/ui';
const ResetUserDataButton = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const closeDialog = (event) => setDialogOpen(false);
  const toggleDialog = (event) => setDialogOpen(!isDialogOpen);

  return (
    <>
      <ConfirmDialog onConfirm={closeDialog} onCancel={closeDialog} display={isDialogOpen} />
      <button onClick={toggleDialog} className="animate-pulse rounded-md bg-neutral-800 hover:bg-neutral-900 border border-pink-700 text-pink-700 p-2">
        <FontAwesomeIcon className="mr-1" icon={faEraser} />
        Reset your account
      </button>
    </>
  );
};

export default ResetUserDataButton;
