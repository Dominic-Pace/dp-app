import React from 'react';
import { UserProvider } from '../store/provider';

import LandingPage from './landing';

const Core = () => {
  return (
    <UserProvider>
      <LandingPage />
    </UserProvider>
  )
};

export default Core
