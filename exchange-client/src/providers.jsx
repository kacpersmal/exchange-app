import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Auth0Provider } from '@auth0/auth0-react';
import { ExchangeRateProvider } from './modules/core';
const Providers = ({ children }) => {
  return (
    <>
      <Auth0Provider domain={import.meta.env.VITE_AUTH_DOMAIN} clientId={import.meta.env.VITE_AUTH_CLIENTID}>
        <Provider store={store}>
          <ExchangeRateProvider>{children}</ExchangeRateProvider>
        </Provider>
      </Auth0Provider>
    </>
  );
};

export default Providers;
