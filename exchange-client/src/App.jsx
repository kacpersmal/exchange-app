import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './app-routes';
import { SpinnerBackdrop } from './modules/shared/components/ui';
import { useSelector } from 'react-redux';
import { Navbar } from './modules/shared/components/layout/navbar';
import { Wrapper } from './modules/shared/components/layout/wrapper';
function App() {
  const appLoading = useSelector((state) => state.global.appLoading);

  return (
    <BrowserRouter>
      <SpinnerBackdrop active={appLoading} />

      <Navbar />

      <Wrapper>
        <AppRoutes />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
