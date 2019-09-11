import React, { Fragment, useEffect } from 'react';
import { useUserState } from '../../store/provider';

import Header from './header';

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
    </Fragment>
  )
};

export default LandingPage;
