import {
  FETCH_USER_INFO_START,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_FAILURE,
} from './types';

const userReducer = (state, action) => {
  switch (action.type) {
    case FETCH_USER_INFO_START:
      return {
        ...state,
       isLoading: true,
      };

    case FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case FETCH_USER_INFO_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return {
        ...state,
        isLoading: false,
      };
  }
};

export default userReducer;
