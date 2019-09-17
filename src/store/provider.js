import React, { useReducer, useContext, createContext } from 'react';

import userReducer from './reducer';
import {
  FETCH_USER_INFO_START,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_FAILURE,
} from './types';

const UserStateProvider = createContext();

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    isLoading: true,
    user: {}
  });

  const getUserInfo = () => {
    dispatch({ type: FETCH_USER_INFO_START });
    dispatch({ type: FETCH_USER_INFO_SUCCESS });
  }

  return (
    <UserStateProvider.Provider
      value={{
        isLoading: state.isLoading,
        user: state.user,
        getUserInfo
      }}
    >
      {children}
    </UserStateProvider.Provider>
  )
}

function useUserState() {
  const context = useContext(UserStateProvider);
  if (context === undefined) {
    throw new Error('DogStateProvider must be used within a DogProvider');
  }
  return context;
}

export { UserProvider, useUserState }
