import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Auth0Provider } from '@auth0/auth0-react';
const Providers = ({ children }) => {
  return (
    <>
      <Auth0Provider domain="dev-e4zbetfqcnjlo84d.us.auth0.com" clientId="9VUWFgacitmIeAzofxKSdlb34YYDyIvm" redirectUri={window.location.origin}>
        <Provider store={store}>{children}</Provider>
      </Auth0Provider>
    </>
  );
};

export default Providers;
