import React, { Fragment, useEffect } from 'react';
import { useUserState } from '../../store/provider';

import Header from './header';
import AboutMe from './about';
import Skills from './skills';
import Experience from './experience';
import Contact from './contact';

const LandingPage = () => {
  console.log(useUserState())
  const { getUserInfo, isLoading, user } = useUserState();
  useEffect(() => {
    if (!user.name) {
      getUserInfo();
    }
  }, [user]);

  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <Fragment>
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Contact />
    </Fragment>
  )
};

export default LandingPage;
