import React from 'react';

import UserProfileTab from '../components/profile/user-data-tab';

const UserProfilePage = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="mx-auto mt-20 p-2 text-white bg-neutral-900 border border-emerald-700 rounded-md ">
        <UserProfileTab />
      </div>
    </div>
  );
};

export default UserProfilePage;
