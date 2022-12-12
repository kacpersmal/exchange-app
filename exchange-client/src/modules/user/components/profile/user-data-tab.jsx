import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import ResetUserDataButton from '../reset-user-data-button';

const ProfileInfo = ({ label, value }) => {
  return (
    <>
      <p className="text-neutral-400 text-sm">{label}</p>
      <p>{value}</p>
    </>
  );
};

const UserProfileTab = () => {
  const { user } = useAuth0();
  return (
    <div>
      <div className="flex flex-row gap-2 items-center">
        <div className="p-2  flex flex-col gap-1">
          <ProfileInfo label="Full Name" value={user.name} />
          <ProfileInfo label="Email" value={user.email} />
          <ProfileInfo label="Country locale" value={user.locale} />
        </div>
        <div className="p-2 ">
          <img className="rounded-full w-auto h-32" src={user.picture} />
        </div>
      </div>
      <div className="w-full border-t border-t-emerald-700 py-2">
        <ResetUserDataButton />
      </div>
    </div>
  );
};

export default UserProfileTab;
