import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowTrendUp, faHome, faShop } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { SignInButton, LogoutButton } from '../../../../auth';
import { UserProfileNavButton } from '../../../../user';
import { useAuth0 } from '@auth0/auth0-react';

const UserNav = (data) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <p className="text-white text-sm">
        Logged in as <span className="text-emerald-900 font-semibold">{data.data.name}</span>
      </p>
      <UserProfileNavButton />
      <LogoutButton />
    </div>
  );
};

const Navbar = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="sticky top-0 z-40 w-full mx-auto p-2 rounded-b-md bg-neutral-900 shadow-md flex flex-row items-center">
      <div className="flex items-center">
        <Link to="/">
          <p className="text-emerald-600 text-2xl font-light pl-2 hover:text-emerald-700">Exchange</p>
        </Link>
        <FontAwesomeIcon className="text-emerald-600 text-2xl" icon={faArrowTrendUp} />

        {isAuthenticated && (
          <div className="flex flex-row gap-4 ml-5">
            <Link to="/" className="p-2 px-3 border border-emerald-700 text-emerald-700 bg-neutral-800 hover:bg-neutral-900 rounded-md">
              <FontAwesomeIcon className="" icon={faHome} />
            </Link>
            <Link to="/exchange" className="p-2 px-3 border border-emerald-700 text-emerald-700 bg-neutral-800 hover:bg-neutral-900 rounded-md">
              <FontAwesomeIcon className="" icon={faShop} />
            </Link>
          </div>
        )}
      </div>
      <div className="mr-5 ml-auto">
        {!isAuthenticated && (
          <div className="flex flex-row items-center gap-4">
            <SignInButton />
          </div>
        )}
        {isAuthenticated && <UserNav data={user} />}
      </div>
    </div>
  );
};

export default Navbar;
