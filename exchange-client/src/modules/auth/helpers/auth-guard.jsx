import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ProblemComponent } from '../../shared';

const AuthGuard = ({ component, title = 'Unauthorized!', message = 'Sorry, you need to be authorized to enter this page!' }) => {
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) return <ProblemComponent title={title} text={message} />;
  return component;
};

export default AuthGuard;
