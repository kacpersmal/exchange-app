import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LandingPage, ExchangePage, AuthGuard } from './modules/shared';
import { UserProfilePage } from './modules/user';
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/profile" element={<AuthGuard component={<UserProfilePage />} />} />
        <Route path="/exchange" element={<AuthGuard component={<ExchangePage />} />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
