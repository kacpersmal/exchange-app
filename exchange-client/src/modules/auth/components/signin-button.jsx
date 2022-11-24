import React from 'react';
import google from '../../../assets/google.png';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../../global-slice';
const SignInButton = () => {
  const { loginWithPopup } = useAuth0();
  const dispatch = useDispatch();

  const onSignIn = async (event) => {
    dispatch(setLoading(true));

    await loginWithPopup();

    dispatch(setLoading(false));
  };

  return (
    <button onClick={onSignIn} className="flex flex-row items-center gap-1 border border-emerald-700 p-2 rounded-md bg-neutral-800 text-white hover:bg-neutral-900">
      <img className="h-auto w-6 " src={google} />
      <p>Sign In!</p>
    </button>
  );
};

export default SignInButton;
