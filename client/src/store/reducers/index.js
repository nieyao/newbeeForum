import { combineReducers } from 'redux';
import userInfo from './userInfo';
import signStatus from './signStatus';

export default combineReducers({
  userInfo,
  signStatus
})