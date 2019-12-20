import React, { Fragment, useEffect } from 'react';
import { useUserState } from '../../store/provider';

import Header from './header';
import AboutMe from './about';
import Skills from './skills';
import Portfolio from './portfolio';
import Contact from './contact';
import Footer from '../../components/footer';

const LandingPage = () => {
  const { getUserInfo, isLoading, user } = useUserState();
  useEffect(() => {
    if (!user.name) {
      getUserInfo();
    }
  }, [user]);

  if (isLoading) {
    return (
      <div
        style={{ alignItems: 'center', display: 'flex', height: '100vh', justifyContent: 'center', width: '100vw' }}
      >
        Loading...
      </div>
    )
  }
  return (
    <Fragment>
      <Header />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </Fragment>
  )
};

export default LandingPage;
