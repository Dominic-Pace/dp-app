import React from 'react'
import { UserProvider } from '../store/provider';

import LandingPage from './landing';
import Footer from '../components/footer';

const Core = () => {
  return (
    <UserProvider>
      <LandingPage />
      <Footer />
    </UserProvider>
  )
}

export default Core
