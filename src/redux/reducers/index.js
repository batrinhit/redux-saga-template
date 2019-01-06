import { combineReducers } from 'redux';
import nav from './navReducer';
import testApi from './testApiReducer';

const rootReducer = combineReducers({
  nav,
  testApi
});

export default rootReducer;
