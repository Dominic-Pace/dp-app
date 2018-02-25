import { combineReducers } from 'redux';

import dashboardReducer from './core/dashboard/reducer';

const RootReducer = combineReducers({
  dashboard: dashboardReducer
});

export default RootReducer;