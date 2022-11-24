import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser } from '@fortawesome/free-solid-svg-icons';
import { ConfirmDialog } from '../../shared/components/ui';
const ResetUserDataButton = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const onConfirm = (evemt) => {
    setDialogOpen(false);
  };

  const onCancel = (event) => {
    setDialogOpen(false);
  };

  return (
    <>
      <ConfirmDialog onConfirm={onConfirm} onCancel={onCancel} display={isDialogOpen} />
      <button onClick={(e) => setDialogOpen(!isDialogOpen)} className="animate-pulse rounded-md bg-neutral-800 hover:bg-neutral-900 border border-pink-700 text-pink-700 p-2">
        <FontAwesomeIcon className="mr-1" icon={faEraser} />
        Reset your account
      </button>
    </>
  );
};

export default ResetUserDataButton;
